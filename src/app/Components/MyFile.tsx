export default function MyFile() {
    const handleOpenPDF = () => {
      window.open("/doc/CV-DI-ROSSO-BAKRIM-NADIA1.pdf", "_blank");
    };
  
    return (
      <button onClick={handleOpenPDF} className="p-2 mx-auto px-10 mt-10 bg-gradient-to-b from-rose-400 to-blue-500 rounded-xl text-white hover:text-gray-600 rounded">
        Voir mon CV
      </button>
    );
  }