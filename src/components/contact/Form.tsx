'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { CheckCircle2, Send, Loader2 } from 'lucide-react';

export const Form: React.FC = () => {
  const [state, handleSubmit] = useForm('mwkgnyye');

  if (state.succeeded) {
    return (
      <div className="py-12 px-6 text-center space-y-4">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-brand-black">Message Sent!</h3>
        <p className="text-sm text-zinc-600 max-w-md mx-auto">
          Thank you for reaching out to Paschaline&apos;s Consult. A senior strategy consultant will review your inquiry and get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      
      <div className="space-y-1">
        <p className="eyebrow text-amber-700">Inquiry form</p>
        <h3 className="mt-3 font-display text-3xl text-slate-900">Tell us what needs to move.</h3>
        <p className="text-sm leading-6 text-slate-600">Share the context and the team will reply from adaobi@bypaschalinesconsult.com.</p>
      </div>

      <div className="space-y-4">
        
        {/* FIRST & LAST NAME ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="first_name" className="text-xs font-semibold text-zinc-700">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              maxLength={30}
              required
              placeholder="e.g. John"
              className="field"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="last_name" className="text-xs font-semibold text-zinc-700">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              maxLength={30}
              required
              placeholder="e.g. Doe"
              className="field"
            />
          </div>
        </div>

        {/* EMAIL & PHONE ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-xs font-semibold text-zinc-700">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              maxLength={50}
              required
              placeholder="name@example.com"
              className="field"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-500 mt-1" />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="phone_number" className="text-xs font-semibold text-zinc-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              maxLength={15}
              placeholder="+234..."
              className="field"
            />
          </div>
        </div>

        {/* MESSAGE AREA */}
        <div className="space-y-1.5">
          <label htmlFor="message" className="text-xs font-semibold text-zinc-700">
            How Can We Help You? <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            maxLength={1000}
            required
            placeholder="Tell us about your project, SOP goals, corporate proposal needs, or general inquiries..."
            className="field resize-y"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-500 mt-1" />
        </div>

      </div>

      {/* SUBMIT BUTTON */}
      <button
        type="submit"
        disabled={state.submitting}
        className="btn-secondary w-full flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state.submitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Send Message</span>
          </>
        )}
      </button>

    </form>
  );
};

export default Form;