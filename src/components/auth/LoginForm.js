"use client";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { LogIn, AlertTriangle, Loader2 } from 'lucide-react';
import { PasswordResetForm } from './PasswordResetForm';
import { PasswordInput } from '@/components/ui/password-input';

const loginSchema = z.object({
  email: z.string().email({ message: "Ungültige E-Mail-Adresse." }).nonempty("E-Mail ist erforderlich"),
  password: z.string().min(6, { message: "Passwort muss mindestens 6 Zeichen lang sein." }).nonempty("Passwort ist erforderlich"),
});

export function LoginForm() {
  const { signIn, loading, error: authError } = useAuth();
  const [formError, setFormError] = useState(null);
  const [showPasswordReset, setShowPasswordReset] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onBlur' // Validierung beim Verlassen des Feldes
  });

  const onSubmit = async (data) => {
    setFormError(null);
    setIsSubmitting(true);
    try {
      await signIn(data.email, data.password);
      // Redirect or further actions will be handled by AuthProvider or page logic if needed
    } catch (e) {
      // error is handled by AuthProvider's toast, but can set local form error if needed
      setFormError(e.message || "Anmeldung fehlgeschlagen.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showPasswordReset) {
    return <PasswordResetForm onBack={() => setShowPasswordReset(false)} />;
  }

  return (
    <div className="flex justify-center items-center py-12">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <LogIn className="mx-auto h-12 w-12 text-primary mb-4" />
          <CardTitle className="text-3xl font-bold">Anmelden</CardTitle>
          <CardDescription>Melden Sie sich an, um auf Ihr Konto zuzugreifen.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
            <div className="space-y-2">
              <Label htmlFor="email">E-Mail <span className="text-destructive">*</span></Label>
              <Input
                id="email"
                type="email"
                placeholder="name@beispiel.de"
                {...register('email')}
                className={errors.email ? 'border-destructive' : ''}
                aria-invalid={errors.email ? "true" : "false"}
                required
              />
              {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Passwort <span className="text-destructive">*</span></Label>
              <PasswordInput
                id="password"
                placeholder="********"
                {...register('password')}
                className={errors.password ? 'border-destructive' : ''}
                aria-invalid={errors.password ? "true" : "false"}
                required
              />
              {errors.password && <p className="text-sm text-destructive">{errors.password.message}</p>}
              <div className="text-right">
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-sm" 
                  onClick={() => setShowPasswordReset(true)}
                  type="button"
                >
                  Passwort vergessen?
                </Button>
              </div>
            </div>
            
            <div className="pt-2 text-sm text-muted-foreground">
              (Captcha-Platzhalter - Funktion folgt)
            </div>

            {authError && !formError && (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Anmeldefehler</AlertTitle>
                <AlertDescription>
                  {authError.message && authError.message.includes('auth/invalid-credential') 
                    ? 'Ungültige Anmeldedaten. Bitte überprüfen Sie Ihre E-Mail und Ihr Passwort.'
                    : (authError.message || 'Ein Fehler ist aufgetreten.')}
                </AlertDescription>
              </Alert>
            )}
             {formError && (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Fehler</AlertTitle>
                <AlertDescription>{formError}</AlertDescription>
              </Alert>
            )}
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90" disabled={loading || isSubmitting}>
              {(loading || isSubmitting) ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Anmelden...
                </>
              ) : 'Anmelden'}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center text-sm">
          <p className="text-muted-foreground">
            Bei Problemen mit der Anmeldung wenden Sie sich bitte an den Administrator.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}