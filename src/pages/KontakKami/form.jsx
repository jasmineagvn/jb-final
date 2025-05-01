const ContactForm = () => {
    return (
        <div className="bg-[#eaf9fa] rounded-2xl p-8 shadow-lg mb-20 max-w-6xl mx-auto mt-20">
            <div className="flex flex-col md:flex-row gap-10">
            <div className="flex-1 flex flex-col gap-6 w-1/2 pr-4">
                <ContactItem
                icon="/icons/kontak kami/call.png"
                title="No. HP (Admin)"
                text="0817-170-422"
                />
                <ContactItem
                icon="/icons/kontak kami/gmail.png"
                title="Email"
                text="janji.baikmedia@gmail.com"
                />
                <ContactItem
                icon="/icons/kontak kami/lokasi.png"
                title="Lokasi"
                text="Alesha House, Vanya Park, Tangerang Regency, Banten"
                />
            </div>
            <div className="hidden md:block w-px bg-[#72717B]"></div>
            <div className="flex-1 w-1/2 pl-4">
                <h2 className="text-2xl font-bold mb-1">Kirim Pesan</h2>
                <p className="text-gray-600 text-sm mb-6">
                Silahkan isi formulir dibawah ini, dan kami akan segera menghubungi Anda
                </p>
                <form className="space-y-4">
                <input
                    type="text"
                    placeholder="Ketik nama"
                    className="bg-white w-full border border-gray-300 rounded-lg p-3 focus:outline-none"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="bg-white w-full border border-gray-300 rounded-lg p-3 focus:outline-none"
                />
                <input
                    type="text"
                    placeholder="No. HP / WhatsApp"
                    className="bg-white w-full border border-gray-300 rounded-lg p-3 focus:outline-none"
                />
                <textarea
                    placeholder="Ketik Pesan"
                    className="bg-white w-full border border-gray-300 rounded-lg p-3 h-[190px] resize-none focus:outline-none"
                ></textarea>
                <button
                    type="submit"
                    className="bg-[#EC901D] hover:bg-orange-600 text-white px-6 py-2 rounded-full w-[187px]"
                >
                    Kirim Pesan
                </button>
                </form>
            </div>
            </div>
        </div>
    );
  };
  
  const ContactItem = ({ icon, title, text }) => (
    <div className="bg-white w-[400px] rounded-xl p-4 shadow-lg flex items-start gap-4">
      <img src={icon} alt={title} className="w-6 h-6 mt-1" />
      <div>
        <h4 className="font-semibold text-[#72717B]">{title}</h4>
        <p className="text-sm text-gray-600">{text}</p>
      </div>
    </div>
  );
  
export default ContactForm;  