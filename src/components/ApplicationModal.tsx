import React, { useState } from 'react';
import { Language, Program } from '../types';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { PROGRAMS } from '../data/yaHalaData';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  preselectedProgramId?: string;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  language,
  preselectedProgramId,
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedProgram, setSelectedProgram] = useState<string>(
    preselectedProgramId || 'in-person'
  );
  const [selectedDialect, setSelectedDialect] = useState<string>('najdi');
  const [proficiency, setProficiency] = useState<string>('beginner');
  const [city, setCity] = useState<string>('riyadh');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [referenceCode, setReferenceCode] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `YH-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceCode(code);
    setStep(3); // confirmation
  };

  const handleReset = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-10 relative shadow-2xl border border-gray-100">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F9F8F5] text-[#1F3423] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#1EC672]" />
            <span>{language === 'en' ? 'ENROLLMENT & ADMISSIONS' : 'القبول والتسجيل'}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-syne font-bold text-[#1F3423]">
            {language === 'en' ? 'Begin Your Ya Hala Journey' : 'ابدأ رحلتك في معهد يا هلا'}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 font-light">
            {language === 'en'
              ? 'Complete this quick 2-minute registration to receive a customized learning syllabus.'
              : 'أكمل بياناتك في دقيقتين للحصول على الخطة التعليمية المناسبة وتحديد المستوى.'}
          </p>
        </div>

        {/* Progress steps indicator */}
        {step < 3 && (
          <div className="flex items-center gap-2 mb-8">
            <div
              className={`h-1.5 flex-1 rounded-full ${
                step >= 1 ? 'bg-[#1EC672]' : 'bg-gray-200'
              }`}
            />
            <div
              className={`h-1.5 flex-1 rounded-full ${
                step >= 2 ? 'bg-[#1EC672]' : 'bg-gray-200'
              }`}
            />
          </div>
        )}

        {/* STEP 1: Program & Dialect */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                {language === 'en' ? '1. Select Your Preferred Program' : '١. اختر البرنامج التدريبي'}
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {PROGRAMS.map((prog) => (
                  <button
                    key={prog.id}
                    type="button"
                    onClick={() => setSelectedProgram(prog.id)}
                    className={`p-3.5 rounded-2xl text-left rtl:text-right border transition-all ${
                      selectedProgram === prog.id
                        ? 'border-[#1EC672] bg-[#1F3423] text-white shadow-sm'
                        : 'border-gray-200 bg-[#F9F8F5] text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-syne font-bold text-sm">
                      {language === 'en' ? prog.title : prog.titleAr}
                    </div>
                    <div
                      className={`text-xs ${
                        selectedProgram === prog.id ? 'text-[#1EC672]' : 'text-gray-500'
                      }`}
                    >
                      {language === 'en' ? prog.category : prog.categoryAr}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                {language === 'en' ? '2. Dialect Focus' : '٢. اللهجة المستهدفة'}
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                {[
                  { id: 'najdi', en: 'Najdi (Riyadh)', ar: 'نجدية (الرياض)' },
                  { id: 'hejazi', en: 'Hejazi (Jeddah)', ar: 'حجازية (جدة)' },
                  { id: 'universal', en: 'Universal Saudi', ar: 'سعودية شاملة' },
                ].map((dialect) => (
                  <button
                    key={dialect.id}
                    type="button"
                    onClick={() => setSelectedDialect(dialect.id)}
                    className={`py-2.5 px-3 rounded-xl border font-semibold text-center transition-all ${
                      selectedDialect === dialect.id
                        ? 'border-[#1EC672] bg-[#1EC672]/15 text-[#1F3423]'
                        : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {language === 'en' ? dialect.en : dialect.ar}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                {language === 'en' ? '3. Current Arabic Level' : '٣. مستواك الحالي في اللغة'}
              </label>
              <select
                value={proficiency}
                onChange={(e) => setProficiency(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#F9F8F5] text-sm focus:outline-none focus:border-[#1EC672]"
              >
                <option value="beginner">
                  {language === 'en' ? 'Complete Beginner (Zero knowledge)' : 'مبتدئ تماماً (بدون معرفة سابقة)'}
                </option>
                <option value="elementary">
                  {language === 'en' ? 'Elementary (Know letters & basic words)' : 'أساسي (معرفة الحروف وكلمات بسيطة)'}
                </option>
                <option value="intermediate">
                  {language === 'en' ? 'Intermediate (Standard Arabic / basic conversation)' : 'متوسط (معرفة بالفصحى أو محادثة خفيفة)'}
                </option>
                <option value="advanced">
                  {language === 'en' ? 'Advanced / Professional (Seeking local cultural nuance)' : 'متقدم (بحث عن الطلاقة وفهم دقائق اللهجة)'}
                </option>
              </select>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-8 py-3.5 rounded-full bg-[#1F3423] text-white font-syne font-bold text-xs uppercase tracking-wider hover:bg-[#142317] flex items-center gap-2"
              >
                <span>{language === 'en' ? 'Continue to Contact Info' : 'المتابعة لبيانات التواصل'}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Contact Details */}
        {step === 2 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                {language === 'en' ? 'Full Name' : 'الاسم الكامل'} *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={language === 'en' ? 'e.g. Sarah Jenkins' : 'مثال: سارة محمد'}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#F9F8F5] text-sm focus:outline-none focus:border-[#1EC672]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                {language === 'en' ? 'Email Address' : 'البريد الإلكتروني'} *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@organization.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#F9F8F5] text-sm focus:outline-none focus:border-[#1EC672]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                {language === 'en' ? 'Phone / WhatsApp' : 'رقم الهاتف / واتساب'} *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+966 50 000 0000"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#F9F8F5] text-sm focus:outline-none focus:border-[#1EC672]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                {language === 'en' ? 'Preferred Location' : 'المقر المفضل'}
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#F9F8F5] text-sm focus:outline-none focus:border-[#1EC672]"
              >
                <option value="riyadh">{language === 'en' ? 'Riyadh Campus (Al-Bujairi / Diplomatic Quarter)' : 'فرع الرياض (البجيري / الحي الدبلوماسي)'}</option>
                <option value="jeddah">{language === 'en' ? 'Jeddah Center (Historic Al-Balad)' : 'فرع جدة (البلد التاريخية)'}</option>
                <option value="online">{language === 'en' ? 'Online Interactive (Global)' : 'عن بُعد (عالمي)'}</option>
              </select>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs font-bold text-gray-500 hover:text-gray-800"
              >
                {language === 'en' ? '← Back' : '← رجوع'}
              </button>

              <button
                type="submit"
                className="px-8 py-3.5 rounded-full bg-[#1EC672] text-[#1F3423] font-syne font-bold text-xs uppercase tracking-wider hover:bg-[#142317] hover:text-white transition-all shadow-md"
              >
                {language === 'en' ? 'SUBMIT APPLICATION' : 'إرسال طلب الالتحاق'}
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Confirmation */}
        {step === 3 && (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-[#1EC672]/20 text-[#1EC672] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h4 className="text-2xl font-syne font-bold text-[#1F3423] mb-2">
              {language === 'en' ? 'Application Received!' : 'تم استلام طلبك بنجاح!'}
            </h4>

            <div className="inline-block px-4 py-1.5 rounded-full bg-[#F9F8F5] border border-gray-200 text-xs font-mono font-bold text-gray-700 mb-4">
              Reference: {referenceCode}
            </div>

            <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed mb-6">
              {language === 'en'
                ? `Thank you, ${name || 'Learner'}. Our academic advisor will contact you within 24 hours at ${email} to arrange your dialect proficiency assessment and campus tour.`
                : `شكراً لك ${name || 'عزيزنا المتعلم'}. سيتواصل معك المرشد الأكاديمي خلال 24 ساعة عبر ${email} لتحديد موعد التقييم وتنسيق زيارة الحرم.`}
            </p>

            <div className="p-4 rounded-2xl bg-[#1F3423] text-white text-xs text-left rtl:text-right mb-6">
              <div className="flex items-center gap-2 text-[#1EC672] font-bold mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>{language === 'en' ? 'What to expect next:' : 'الخطوات القادمة:'}</span>
              </div>
              <ul className="space-y-1 text-white/80 list-disc list-inside">
                <li>{language === 'en' ? '15-minute informal conversation check' : 'محادثة ودية قصيرة للتحقق من المستوى'}</li>
                <li>{language === 'en' ? 'Complimentary sample dialect module' : 'درس تجريبي مجاني في اللهجة المختارة'}</li>
                <li>{language === 'en' ? 'Customized timetable & cohort match' : 'جدول زمني مرن يناسب أوقاتك'}</li>
              </ul>
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-full bg-[#1F3423] text-white font-syne font-bold text-xs uppercase tracking-wider hover:bg-[#142317]"
            >
              {language === 'en' ? 'Done & Return to Site' : 'تم والعودة للموقع'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
