import { useState } from "react"
import { pengurusDetail } from "../../data"
import { BackgroundPoltek } from "../../assets/Pengurus/ModalPengurus"

const PopupWithPagination = ({ isOpen, onClose, divisiSelect }) => {
  const [index, setIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  if (!isOpen || !divisiSelect) return null

  const dataDivisi = pengurusDetail[divisiSelect]

  if (!dataDivisi) return <div>Data tidak ditemukan</div>

  const anggota = dataDivisi.anggota
  const total = anggota.length

  const handleNext = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % total)
      setIsTransitioning(false)
    }, 150)
  }

  const handlePrev = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + total) % total)
      setIsTransitioning(false)
    }, 150)
  }

  const currentAnggota = anggota[index]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-yellow-400/80 shadow-2xl shadow-yellow-400/20 p-4 sm:p-6 lg:p-8 rounded-3xl max-w-7xl w-full mx-4 flex flex-col lg:flex-row gap-6 lg:gap-10 max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-4 duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
        >
          ✕
        </button>

        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 text-white space-y-4 lg:space-y-6">
          <div className="flex items-center gap-4">
            <img
              src={dataDivisi.logoDivisi || "/placeholder.svg"}
              alt="Logo"
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain animate-in spin-in-180 duration-700"
            />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold capitalize bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              Divisi {divisiSelect}
            </h2>
          </div>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed animate-in slide-in-from-left duration-700 delay-200">
            {dataDivisi.deskripsi}
          </p>

          <div className="space-y-3 animate-in slide-in-from-left duration-700 delay-300">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] transform"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <strong className="block text-sm sm:text-base">Lorem Ipsum Dolor sit am</strong>
                <p className="text-xs sm:text-sm opacity-80 mt-1">Lorem ipsum dolor sit amet.</p>
              </div>
            ))}
          </div>

          {/* Member Counter - Mobile */}
          <div className="lg:hidden flex justify-center items-center gap-2 text-yellow-400 font-semibold">
            <span className="text-sm">{index + 1}</span>
            <div className="flex gap-1">
              {anggota.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === index ? "bg-yellow-400 scale-125" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm">{total}</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 relative flex flex-col items-center justify-center min-h-[400px] lg:min-h-[500px]">
          {/* Background Image */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <img
              src={BackgroundPoltek || "/placeholder.svg"}
              alt="Background"
              className="w-full h-full object-cover opacity-30 animate-in fade-in duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Member Photo */}
          <div
            className={`relative z-10 transition-all duration-300 ${isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
          >
            <div className="relative group">
              <img
                src={currentAnggota.foto || "/placeholder.svg"}
                alt={currentAnggota.nama}
                className="w-48 h-64 sm:w-52 sm:h-72 lg:w-60 lg:h-80 object-cover rounded-2xl shadow-2xl border-4 border-yellow-400/50 group-hover:border-yellow-400 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Member Info */}
          <div
            className={`z-10 mt-4 text-center transition-all duration-300 ${isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 drop-shadow-lg">
              {currentAnggota.nama}
            </h3>
            <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
              {currentAnggota.jabatan}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            disabled={isTransitioning}
            className="absolute left-2 sm:left-4 lg:left-[-25px] top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed text-black p-2 sm:p-3 rounded-full z-20 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 active:scale-95"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className="absolute right-2 sm:right-4 lg:right-[-25px] top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed text-black p-2 sm:p-3 rounded-full z-20 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 active:scale-95"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Member Counter - Desktop */}
          <div className="hidden lg:flex absolute bottom-4 left-1/2 transform -translate-x-1/2 items-center gap-2 text-yellow-400 font-semibold bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
            <span className="text-sm">{index + 1}</span>
            <div className="flex gap-1">
              {anggota.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === index ? "bg-yellow-400 scale-125" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm">{total}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopupWithPagination
