import { LucideIcon, MagnetIcon } from "lucide-react";
import { IconType } from "react-icons";
import { BsGithub } from "react-icons/bs";
import { FaGlobeAsia, FaMobileAlt, FaToolbox } from "react-icons/fa";
import { FaEarthAsia, FaMobileScreenButton } from "react-icons/fa6";
import { MdCloudUpload } from "react-icons/md";

export const FEATURES_EN = [
  {
    title: "AI-Powered Typing",
    content: "Leverage the power of AI to predict and suggest replies, making typing faster and more intuitive.",
    icon: BsGithub, // Consider replacing or creating a custom icon that better represents AI
  },
  {
    title: "Seamless Integration",
    content: "Designed to integrate flawlessly with iOS, ensuring a native and smooth experience.",
    icon: FaMobileAlt, // Changed from FaMobileScreenButton for compatibility
  },
  {
    title: "Automatic Theme Adaptation",
    content: "Handleit intuitively adjusts its theme to align with your system's settings, offering a seamless and personalized typing experience without any manual effort or need for coding.",
    icon: FaToolbox,
  },
  {
    title: "Privacy-First Approach",
    content: "Built with privacy as a priority, Handleit ensures your data and typing history remain secure.",
    icon: MagnetIcon, // Consider if another icon could better represent privacy or security
  },
  {
    title: "Ready to Use",
    content: "Designed for simplicity and ease, Handleit requires no complicated setup. From download to daily use, everything is smooth and intuitive, ensuring your experience is always up-to-date without any extra effort.",
    icon: MdCloudUpload,
  },
  {
    title: "Multilingual Support",
    content: "Communicate globally with support for multiple languages, breaking down language barriers.",
    icon: FaGlobeAsia, // Changed from FaEarthAsia for compatibility
  },
];


import { AiOutlineAi } from "react-icons/ai"; // Assuming you have an AI icon or similar
import { IoMdSpeedometer } from "react-icons/io"; // For performance optimization
import { SiYourIconForCustomization } from "react-icons/si"; // Assuming you have a custom icon for easy customization

export const FEATURES_ZH = [
  {
    title: "AI 驱动输入",
    content: "借助先进的 AI 技术，Handleit 能够提供智能的打字建议，大幅提高打字速度和准确性。",
    icon: BsGithub,
  },
  {
    title: "无缝集成",
    content: "Handleit 可无缝集成到 iOS 系统，提供流畅的用户体验。",
    icon: BsGithub,
  },
  {
    title: "个性化定制",
    content: "Handleit 提供丰富的个性化定制选项，包括主题、字体和更多。",
    icon: BsGithub,
  },
  {
    title: "性能优化",
    content: "Handleit 专为提供最佳性能而优化，确保快速响应和低延迟。",
    icon: BsGithub,
  },
  {
    title: "简单部署",
    content: "Handleit 支持云同步，方便用户在多设备间同步设置和偏好。",
    icon: BsGithub,
  },
  {
    title: "多语言支持",
    content: "支持多种语言输入，让你轻松应对全球化通讯需求。",
    icon: BsGithub,
  },
];


export const FEATURES_JA = [
  {
    title: "オープンソースの利点",
    content: "完全無料で、豊富なカスタマイズオプションを提供。",
    icon: BsGithub,
  },
  {
    title: "レスポンシブデザイン",
    content: "どのデバイス上でも最適に表示されるように細心のデザインを施したテンプレート。",
    icon: FaMobileScreenButton,
  },
  {
    title: "簡単カスタマイズ",
    content: "色、フォント、レイアウトをコーディング知識なしで簡単に変更可能。",
    icon: FaToolbox,
  },
  {
    title: "SEO 最適化",
    content: "ウェブサイトの発見可能性を高めるために、検索エンジン最適化を念頭に置いて構築されたテンプレート。",
    icon: MagnetIcon,
  },
  {
    title: "ワンクリックデプロイメント",
    content: "主要なウェブホスティングサービスと密接に統合し、即時にウェブサイトを公開。",
    icon: MdCloudUpload,
  },
  {
    title: "グローバリゼーションサポート",
    content: "複数言語をサポートし、グローバルな視聴者を魅了するウェブサイト。",
    icon: FaEarthAsia,
  },
];

export const FEATURES_AR = [
  {
    title: "ميزة المصدر المفتوح",
    content: "مجانية بالكامل مع ثروة من خيارات التخصيص.",
    icon: BsGithub,
  },
  {
    title: "تصميم متجاوب",
    content: "تم تصميم القوالب بعناية لضمان عرض مثالي على أي جهاز.",
    icon: FaMobileScreenButton,
  },
  {
    title: "تخصيص سهل",
    content: "غير الألوان والخطوط والتخطيطات بسهولة دون الحاجة إلى معرفة بالبرمجة.",
    icon: FaToolbox,
  },
  {
    title: "مُحسّن لمحركات البحث",
    content: "تم بناء القوالب مع مراعاة تحسين محركات البحث لتعزيز قابلية اكتشاف موقعك.",
    icon: MagnetIcon,
  },
  {
    title: "نشر بنقرة واحدة",
    content: "متكاملة بشكل وثيق مع خدمات استضافة الويب الرائدة لنشر الموقع فوراً.",
    icon: MdCloudUpload,
  },
  {
    title: "دعم العولمة",
    content: "يدعم لغات متعددة، مما يجعل موقعك جذابًا لجمهور عالمي.",
    icon: FaEarthAsia,
  },
];

export const FEATURES_ES = [
  {
    title: "Ventaja del Código Abierto",
    content: "Completamente gratuito con una riqueza de opciones de personalización.",
    icon: BsGithub,
  },
  {
    title: "Diseño Responsivo",
    content: "Plantillas diseñadas meticulosamente para garantizar una visualización óptima en cualquier dispositivo.",
    icon: FaMobileScreenButton,
  },
  {
    title: "Personalización Fácil",
    content: "Cambia colores, fuentes y diseños sin esfuerzo y sin necesidad de conocimientos de codificación.",
    icon: FaToolbox,
  },
  {
    title: "Optimizado para SEO",
    content: "Plantillas construidas con la optimización de motores de búsqueda en mente para mejorar la descubribilidad de tu sitio web.",
    icon: MagnetIcon,
  },
  {
    title: "Despliegue con Un Clic",
    content: "Integrado estrechamente con servicios líderes de alojamiento web para la publicación instantánea del sitio web.",
    icon: MdCloudUpload,
  },
  {
    title: "Soporte de Globalización",
    content: "Soporta múltiples idiomas, haciendo tu sitio web atractivo para una audiencia global.",
    icon: FaEarthAsia,
  },
];

export const FEATURES_RU = [
  {
    title: "Преимущество Открытого Исходного Кода",
    content: "Полностью бесплатно с широкими возможностями настройки.",
    icon: BsGithub,
  },
  {
    title: "Адаптивный Дизайн",
    content: "Шаблоны, тщательно разработанные для обеспечения оптимального отображения на любом устройстве.",
    icon: FaMobileScreenButton,
  },
  {
    title: "Легкая Настройка",
    content: "Легко изменяйте цвета, шрифты и макеты без знаний в области программирования.",
    icon: FaToolbox,
  },
  {
    title: "Оптимизировано для Поисковых Систем",
    content: "Шаблоны созданы с учетом оптимизации для поисковых систем, чтобы повысить обнаруживаемость вашего сайта.",
    icon: MagnetIcon,
  },
  {
    title: "Развертывание в Один Клик",
    content: "Плотно интегрировано с ведущими сервисами веб-хостинга для мгновенной публикации сайта.",
    icon: MdCloudUpload,
  },
  {
    title: "Поддержка Глобализации",
    content: "Поддерживает несколько языков, делая ваш сайт привлекательным для мировой аудитории.",
    icon: FaEarthAsia,
  },
];

interface FeaturesCollection {
  [key: `FEATURES_${string}`]: {
    title: string;
    content: string;
    icon: IconType | LucideIcon;
  }[];
}

export const ALL_FEATURES: FeaturesCollection = {
  FEATURES_EN,
  FEATURES_ZH,
  FEATURES_JA,
  FEATURES_AR,
  FEATURES_ES,
  FEATURES_RU
}
