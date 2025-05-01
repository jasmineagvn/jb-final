const maps = () => {
  return (
    <section className="py-12 bg-white text-center">
      <h2 class="text-4xl font-bold text-gray-900 mb-4">
        Temukan Kami Di Google Maps
      </h2>
      <p class="text-gray-600 mb-8">
        Kunjungi Lokasi Janji Baik dan Kami Siap Menyambut Anda Secara Langsung
      </p>

      <div class="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.782424645917!2d106.61430907355545!3d-6.292301061583622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbdc511cb5bd%3A0xa230ec5d9fc94409!2sJanji%20Baik!5e0!3m2!1sen!2sid!4v1746089697175!5m2!1sen!2sid"
          class="w-full max-w-5xl h-[450px] shadow-md"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default maps;
