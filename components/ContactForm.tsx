"use client";
import { useState, useRef } from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { cn } from '@/lib/utils';
import { Turnstile } from '@marsidev/react-turnstile';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  fullname: z.string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre no puede exceder 50 caracteres'),
  email: z.string()
    .email('Email inválido')
    .min(5, 'El email debe tener al menos 5 caracteres')
    .max(50, 'El email no puede exceder 50 caracteres'),
  company: z.string()
    .min(2, 'El nombre de la empresa debe tener al menos 2 caracteres')
    .max(50, 'El nombre de la empresa no puede exceder 50 caracteres'),
  message: z.string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(500, 'El mensaje no puede exceder 500 caracteres'),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });
  
  const onSubmit = async (data: FormData) => {
    if (!token) {
      toast({
        title: "Error",
        description: "Por favor, completa el captcha",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          token
        }),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el mensaje');
      }

      toast({
        title: "¡Éxito!",
        description: "Mensaje enviado correctamente",
        variant: "default",
        duration: 3000,
      });
      
      reset();
    } catch (error: unknown) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Error al enviar el mensaje",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <LabelInputContainer>
        <Label htmlFor="fullname">Nombre Completo</Label>
        <Input 
          {...register('fullname')}
          placeholder="Juan Pérez" 
          type="text"
          className={`bg-black/5 border-gray-200 text-black/60 dark:text-white ${
            errors.fullname ? 'border-red-500' : ''
          }`}
        />
        {errors.fullname && (
          <span className="text-sm text-red-500">{errors.fullname.message}</span>
        )}
      </LabelInputContainer>

      <LabelInputContainer>
        <Label htmlFor="email">Email</Label>
        <Input 
          {...register('email')}
          placeholder="juan@ejemplo.com" 
          type="email"
          className={`bg-black/5 border-gray-200 text-black/60 dark:text-white ${
            errors.email ? 'border-red-500' : ''
          }`}
        />
        {errors.email && (
          <span className="text-sm text-red-500">{errors.email.message}</span>
        )}
      </LabelInputContainer>

      <LabelInputContainer>
        <Label htmlFor="company">Empresa</Label>
        <Input 
          {...register('company')}
          placeholder="Tu Empresa S.A." 
          type="text"
          className={`bg-black/5 border-gray-200 text-black/60 dark:text-white ${
            errors.company ? 'border-red-500' : ''
          }`}
        />
        {errors.company && (
          <span className="text-sm text-red-500">{errors.company.message}</span>
        )}
      </LabelInputContainer>

      <LabelInputContainer>
        <Label htmlFor="message">Mensaje</Label>
        <Textarea
          {...register('message')}
          placeholder="Cuéntanos sobre tu proyecto..."
          className={`h-32 bg-black/5 border-gray-200 text-black/60 dark:text-white ${
            errors.message ? 'border-red-500' : ''
          }`}
        />
        {errors.message && (
          <span className="text-sm text-red-500">{errors.message.message}</span>
        )}
      </LabelInputContainer>
      <div className="flex justify-center mb-4">
        <Turnstile
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
          onSuccess={(token) => setToken(token)}
        />
      </div>
      <button
        className="w-full bg-gradient-to-br from-neutral-800 to-neutral-900 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] hover:-translate-y-0.5 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        type="submit"
        disabled={loading || !token}
      >
        {loading ? 'Enviando...' : 'Enviar Mensaje'}
        <BottomGradient />
      </button>
    </form>
  );
}

const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </>
    );
  };
  
  const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
  };