export default function MyFile() {
    const handleOpenPDF = () => {
      window.open("/doc/CV-DI-ROSSO-BAKRIM-NADIA1.pdf", "_blank");
    };
  
    return (
      <button onClick={handleOpenPDF} className="p-2 bg-gradient-to-r from-blue-400 to-rose-400 text-white rounded">
        Voir mon CV
      </button>
    );
  }