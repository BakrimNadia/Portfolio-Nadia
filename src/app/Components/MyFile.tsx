export default function MyFile() {
    const handleOpenPDF = () => {
      window.open("/doc/CV NADIA DI ROSSO BAKRIM 1.pdf", "_blank");
    };
  
    return (
      <button onClick={handleOpenPDF} className="p-2 mx-auto px-10 mt-10 border border-sky-200 bg-gradient-to-r from-rose-200 via-fuchsia-200 to-sky-200 rounded-xl font-bold text-gray-700 hover:text-gray-900 rounded">
        Voir mon CV
      </button>
    );
  }