import React from 'react'

function WhyUs() {
    return (
        <div className="bg-[url(/background/bg.jpeg)] bg-cover bg-center text-amber-100 font-[playfair] px-4 md:px-10 lg:px-20 py-6">

            <h2 className="text-2xl md:text-3xl text-center font-semibold py-8">
                Niyə görə bizi seçməlisiniz?
            </h2>

            <div className="md:flex items-center gap-8 md:gap-16 xl:py-10">

                {/* Şəkil */}
                <div className="flex justify-center">
                    <img
                        src="./blog/logobane.jpeg"
                        alt="Az_parfumery"
                        className="w-[150px] sm:w-[180px] md:w-[220px] lg:w-[250px] 
                           h-auto rounded-xl object-cover shrink-0 shadow-2xs"
                    />
                </div>

                {/* Mətn */}
                <p className="text-lg md:text-2xl lg:text-3xl leading-relaxed text-center py-7">
                    Biz yalnız orijinal və sertifikatlı ətirlər təqdim edirik. Hər məhsul birbaşa etibarlı distribyutorlardan alınır və keyfiyyət zəmanəti ilə çatdırılır.
                    Müştərilərimiz üçün seçilmiş brendlər, eksklüziv koleksiyalar və uzunmüddətli qalıcılıq təmin edən ətirlər təklif edirik.
                    Sürətli çatdırılma, peşəkar xidmət və yüksək müştəri məmnuniyyəti bizim əsas prioritetimizdir.
                    Burada alış-veriş etdikdə həm keyfiyyətə, həm də etibara investisiya etmiş olursunuz.
                </p>

            </div>
        </div>

    )
}

export default WhyUs;




