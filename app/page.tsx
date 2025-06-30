"use client"

import { useState, useEffect } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  Users,
  Award,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Building2,
  Calendar,
  Target,
  Truck,
  Star,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  Globe,
  Zap,
} from "lucide-react"
import Image from "next/image"

// Enhanced animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
}

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
}

const floatingAnimation = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

// Enhanced counter animation component
function AnimatedCounter({ end, duration = 2.5, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        setCount(Math.floor(easeOutQuart * end))
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  )
}

export default function VisionPublishingHouse() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.95])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/30">
      {/* Enhanced Header */}
      <motion.header
        className="bg-white/80 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-teal-100/50"
        style={{ opacity: headerOpacity }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-800 rounded-xl flex items-center justify-center shadow-lg">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-coral-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-800 to-cyan-700 bg-clip-text text-transparent">
                  Vision Publishing House
                </h1>
                <p className="text-sm text-slate-600 font-medium">Excellence Since 2005</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {["About", "Services", "Publications", "Contact"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-slate-700 hover:text-teal-600 font-medium transition-all duration-300 group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-600 to-coral-500 transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-teal-50 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.nav
              className="md:hidden mt-4 pb-4 border-t border-teal-100"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="flex flex-col space-y-3 pt-4">
                {["About", "Services", "Publications", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-700 hover:text-teal-600 font-medium transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </div>
      </motion.header>

      {/* Enhanced Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-cyan-700 to-teal-800"></div>
        {/* Subtle SVG dot pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-5xl mx-auto text-white"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Transforming Education Since 2005
              </Badge>
            </motion.div>

            <motion.h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight" variants={fadeInUp}>
              Vision Publishing
              <span className="block bg-gradient-to-r from-coral-400 to-orange-400 bg-clip-text text-transparent">
                House
              </span>
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl mb-12 text-teal-100 leading-relaxed max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Delivering knowledge across India's public institutions with excellence, innovation, and unwavering
              commitment to educational advancement.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-6 justify-center items-center" variants={fadeInUp}>
              <Button
                size="lg"
                className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm bg-transparent"
              >
                View Publications
              </Button>
            </motion.div>

            <motion.div className="flex flex-wrap justify-center gap-6 mt-16" variants={fadeInUp}>
              {[
                { icon: Calendar, label: "Est. 2005", value: "19+ Years" },
                { icon: Building2, label: "Institutions", value: "1200+" },
                { icon: Globe, label: "Pan India", value: "Presence" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3"
                >
                  <item.icon className="w-5 h-5 text-coral-400" />
                  <div className="text-left">
                    <div className="text-sm text-teal-100">{item.label}</div>
                    <div className="font-semibold">{item.value}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-coral-400/20 rounded-full blur-xl"
          variants={floatingAnimation}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-teal-400/20 rounded-full blur-xl"
          variants={floatingAnimation}
          animate="animate"
          transition={{ delay: 1 }}
        />
      </section>

      {/* Enhanced Performance Metrics */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-50/50 to-coral-50/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <Badge className="bg-teal-100 text-teal-800 px-4 py-2 text-sm font-medium mb-4">Our Impact</Badge>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Excellence in Numbers</h3>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Two decades of consistent growth and educational impact across India
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: BookOpen,
                  label: "Books Published",
                  value: 500,
                  suffix: "+",
                  color: "from-teal-500 to-cyan-600",
                  bgColor: "bg-teal-50",
                },
                {
                  icon: Users,
                  label: "Institutions Served",
                  value: 1200,
                  suffix: "+",
                  color: "from-coral-500 to-orange-600",
                  bgColor: "bg-coral-50",
                },
                {
                  icon: Award,
                  label: "Years of Excellence",
                  value: 19,
                  suffix: "",
                  color: "from-purple-500 to-indigo-600",
                  bgColor: "bg-purple-50",
                },
                {
                  icon: TrendingUp,
                  label: "Annual Growth",
                  value: 25,
                  suffix: "%",
                  color: "from-emerald-500 to-green-600",
                  bgColor: "bg-emerald-50",
                },
              ].map((metric, index) => (
                <motion.div key={index} variants={scaleIn}>
                  <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm group hover:-translate-y-2">
                    <CardContent className="pt-6">
                      <div
                        className={`w-20 h-20 ${metric.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center`}
                        >
                          <metric.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="text-4xl font-bold text-slate-800 mb-3">
                        <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                      </div>
                      <p className="text-slate-600 font-medium">{metric.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-teal-50/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeInLeft}>
                <Badge className="bg-teal-100 text-teal-800 px-4 py-2 text-sm font-medium mb-6">Our Story</Badge>
                <h3 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                  Pioneering Educational Excellence Since
                  <span className="text-teal-600"> 2005</span>
                </h3>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Founded in 2005, Vision Publishing House emerged with a singular mission: to revolutionize educational
                  content delivery across India's public institutions. Our journey began with a vision to bridge the gap
                  between quality educational resources and institutional accessibility.
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Today, we stand as a testament to unwavering commitment, having transformed the educational landscape
                  through innovative publishing solutions, comprehensive distribution networks, and deep understanding
                  of institutional requirements.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "Specialized institutional publishing expertise",
                    "Comprehensive pan-India distribution network",
                    "Custom educational content solutions",
                    "Quality assurance and academic excellence",
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      variants={fadeInUp}
                      transition={{ delay: index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-semibold group">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="relative z-10">
                  <Image
                    src="/placeholder.svg?height=500&width=600&text=Vision+Publishing+Office"
                    alt="Vision Publishing House Office"
                    width={600}
                    height={500}
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-coral-500 to-orange-600 text-white p-6 rounded-2xl shadow-xl">
                    <div className="text-3xl font-bold">19+</div>
                    <div className="text-sm opacity-90">Years of Excellence</div>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-200 rounded-full opacity-60 blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-coral-200 rounded-full opacity-60 blur-xl"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <Badge className="bg-coral-100 text-coral-800 px-4 py-2 text-sm font-medium mb-4">Our Capabilities</Badge>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Comprehensive Publishing & Distribution Solutions
              </h3>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                From concept to delivery, we provide end-to-end educational publishing services tailored for India's
                diverse institutional landscape.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: BookOpen,
                  title: "Educational Publishing",
                  description:
                    "Comprehensive publishing services for academic content across multiple disciplines and educational levels.",
                  features: ["Curriculum-aligned content", "Multi-format publishing", "Quality assurance"],
                  color: "from-teal-500 to-cyan-600",
                  bgColor: "bg-teal-50",
                },
                {
                  icon: Truck,
                  title: "Nationwide Distribution",
                  description:
                    "Robust distribution network ensuring timely delivery to public institutions across all Indian states.",
                  features: ["Pan-India coverage", "Timely delivery", "Institutional partnerships"],
                  color: "from-coral-500 to-orange-600",
                  bgColor: "bg-coral-50",
                },
                {
                  icon: Target,
                  title: "Custom Solutions",
                  description:
                    "Tailored publishing and content solutions designed specifically for unique institutional requirements.",
                  features: ["Bespoke content", "Flexible formats", "Consultation services"],
                  color: "from-purple-500 to-indigo-600",
                  bgColor: "bg-purple-50",
                },
              ].map((service, index) => (
                <motion.div key={index} variants={scaleIn}>
                  <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 bg-white group hover:-translate-y-2">
                    <CardHeader className="text-center pb-4">
                      <div
                        className={`w-20 h-20 ${service.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}
                        >
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <CardTitle className="text-2xl font-bold text-slate-800 mb-3">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-slate-600 mb-6 leading-relaxed text-base">
                        {service.description}
                      </CardDescription>
                      <div className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                            <span className="text-sm text-slate-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Publications Showcase */}
      <section id="publications" className="py-20 bg-gradient-to-br from-slate-50 to-teal-50/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <Badge className="bg-teal-100 text-teal-800 px-4 py-2 text-sm font-medium mb-4">Our Publications</Badge>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Quality Educational Content</h3>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Discover our comprehensive collection of educational publications designed specifically for India's
                institutional requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Advanced Mathematics", category: "STEM", rating: 4.9, color: "from-blue-500 to-indigo-600" },
                {
                  title: "Scientific Principles",
                  category: "Science",
                  rating: 4.8,
                  color: "from-emerald-500 to-green-600",
                },
                { title: "Indian Heritage", category: "History", rating: 4.7, color: "from-amber-500 to-orange-600" },
                {
                  title: "Language Mastery",
                  category: "Literature",
                  rating: 4.8,
                  color: "from-purple-500 to-pink-600",
                },
                { title: "Physics Fundamentals", category: "Science", rating: 4.9, color: "from-cyan-500 to-blue-600" },
                {
                  title: "Geography Atlas",
                  category: "Social Studies",
                  rating: 4.6,
                  color: "from-teal-500 to-cyan-600",
                },
                {
                  title: "Digital Literacy",
                  category: "Technology",
                  rating: 4.8,
                  color: "from-violet-500 to-purple-600",
                },
                {
                  title: "Environmental Science",
                  category: "Ecology",
                  rating: 4.7,
                  color: "from-green-500 to-emerald-600",
                },
              ].map((book, index) => (
                <motion.div key={index} variants={scaleIn}>
                  <Card className="hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="relative mb-6">
                        <div className="relative overflow-hidden rounded-xl">
                          <Image
                            src={`/placeholder.svg?height=240&width=180&text=Book+${index + 1}`}
                            alt={book.title}
                            width={180}
                            height={240}
                            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                        <Badge className="absolute top-3 right-3 bg-white/90 text-slate-800 backdrop-blur-sm">
                          <Star className="w-3 h-3 mr-1 fill-current text-amber-500" />
                          {book.rating}
                        </Badge>
                      </div>
                      <h4 className="font-bold text-slate-800 mb-2 text-lg">{book.title}</h4>
                      <Badge variant="outline" className={`text-xs bg-gradient-to-r ${book.color} text-white border-0`}>
                        {book.category}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div className="text-center mt-12" variants={fadeInUp}>
              <Button
                variant="outline"
                size="lg"
                className="border-teal-200 text-teal-700 hover:bg-teal-50 px-8 py-3 rounded-full font-semibold bg-transparent"
              >
                View Complete Catalog
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-teal-600 via-cyan-700 to-teal-800 text-white relative overflow-hidden"
      >
        {/* Subtle SVG dot pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm font-medium mb-4">
                Get In Touch
              </Badge>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">Ready to Partner With Us?</h3>
              <p className="text-xl text-teal-100 max-w-3xl mx-auto">
                Connect with Vision Publishing House for your educational publishing and distribution needs. Let's build
                the future of institutional education together.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div variants={fadeInLeft}>
                <h4 className="text-2xl font-bold mb-8">Contact Information</h4>
                <div className="space-y-8">
                  {[
                    {
                      icon: Mail,
                      title: "Email Address",
                      content: "umaraziz97@gmail.com",
                      link: "mailto:umaraziz97@gmail.com",
                    },
                    {
                      icon: Phone,
                      title: "Phone Number",
                      content: "+91 7889381511",
                      link: "tel:7889381511",
                    },
                    {
                      icon: MapPin,
                      title: "Office Address",
                      content: "Batamaloo, Srinagar\nJammu & Kashmir 190009\nIndia",
                      link: null,
                    },
                  ].map((contact, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 group"
                      variants={fadeInUp}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                        <contact.icon className="w-6 h-6 text-coral-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-white mb-1">{contact.title}</p>
                        {contact.link ? (
                          <a
                            href={contact.link}
                            className="text-teal-100 hover:text-white transition-colors leading-relaxed"
                          >
                            {contact.content}
                          </a>
                        ) : (
                          <p className="text-teal-100 leading-relaxed whitespace-pre-line">{contact.content}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight}>
                <Card className="bg-white/10 border-white/20 backdrop-blur-lg">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Why Choose Vision Publishing House?</CardTitle>
                    <CardDescription className="text-teal-100">
                      Discover what sets us apart in the educational publishing landscape
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {[
                      "19+ years of proven publishing excellence",
                      "Specialized expertise in institutional requirements",
                      "Comprehensive pan-India distribution network",
                      "Custom educational content solutions",
                      "Quality assurance and academic standards",
                      "Dedicated customer support and consultation",
                    ].map((benefit, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3"
                        variants={fadeInUp}
                        transition={{ delay: index * 0.1 }}
                      >
                        <CheckCircle className="w-5 h-5 text-coral-400 flex-shrink-0" />
                        <span className="text-teal-100">{benefit}</span>
                      </motion.div>
                    ))}

                    <div className="pt-6">
                      <Button className="w-full bg-coral-500 hover:bg-coral-600 text-white py-3 rounded-full font-semibold group">
                        Start Your Partnership Journey
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-slate-900 text-white py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-cyan-700 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h5 className="font-bold text-lg">Vision Publishing House</h5>
                  <p className="text-sm text-slate-400">Excellence Since 2005</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Delivering knowledge across India's public institutions with unwavering commitment to educational
                excellence.
              </p>
            </div>

            <div>
              <h6 className="font-semibold text-white mb-4">Quick Links</h6>
              <div className="space-y-2">
                {["About Us", "Our Services", "Publications", "Contact"].map((link) => (
                  <a key={link} href="#" className="block text-slate-400 hover:text-teal-400 transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h6 className="font-semibold text-white mb-4">Our Impact</h6>
              <div className="space-y-2 text-slate-400">
                <p>500+ Books Published</p>
                <p>1200+ Institutions Served</p>
                <p>Pan-India Distribution</p>
                <p>19+ Years of Excellence</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 mb-4 md:mb-0">
                © {new Date().getFullYear()} Vision Publishing House. All rights reserved.
              </p>
              <p className="text-sm text-slate-500">Delivering knowledge across India's public institutions</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
