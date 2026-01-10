import React, { useState, useEffect } from 'react';
import { newsletterAPI } from './api';
import PDFViewer from './components/PDFViewer';
import { ChevronLeft, ChevronRight, Calendar, FileText } from 'lucide-react';

const MONTHS = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

export default function NewsletterManager() {
    const [newsletters, setNewsletters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        loadNewsletters();
    }, []);

    async function loadNewsletters() {
        try {
            setLoading(true);
            setError(null);
            // Load all published newsletters (limit high enough to get all)
            const data = await newsletterAPI.getArchive(1, 100, false);
            setNewsletters(data.newsletters);

            // Auto-select the latest (first) newsletter
            if (data.newsletters.length > 0) {
                setCurrentIndex(0);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    const currentNewsletter = newsletters[currentIndex];

    const goToPrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const goToNext = () => {
        if (currentIndex < newsletters.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mb-4 mx-auto"></div>
                    <p className="text-zinc-400 text-lg">Memuat Newsletter...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-4">
                <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-8 max-w-md text-center">
                    <div className="text-red-500 text-5xl mb-4">⚠️</div>
                    <h3 className="text-xl font-bold text-white mb-2">Error</h3>
                    <p className="text-zinc-400 mb-4">{error}</p>
                    <button
                        onClick={loadNewsletters}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                        Coba Lagi
                    </button>
                </div>
            </div>
        );
    }

    if (newsletters.length === 0) {
        return (
            <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-4">
                <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-8 max-w-md text-center">
                    <FileText className="mx-auto mb-4 text-zinc-600" size={64} />
                    <h3 className="text-xl font-bold text-white mb-2">Belum Ada Newsletter</h3>
                    <p className="text-zinc-400">
                        Newsletter yang telah dipublikasikan akan tampil di sini.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-zinc-900 flex flex-col">
            {/* Embedded PDF Viewer - No Modal, Always Visible */}
            {currentNewsletter && currentNewsletter.pdf_url && (
                <PDFViewer
                    url={currentNewsletter.pdf_url}
                    newsletterCount={newsletters.length}
                    currentIndex={currentIndex}
                    onPrevious={goToPrevious}
                    onNext={goToNext}
                />
            )}
        </div>
    );
}
