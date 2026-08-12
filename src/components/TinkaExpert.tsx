import React, { useState, useRef, useMemo, useEffect } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';

const Sparkles = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
);
const BrainCircuit = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 3 2.5 2.5 0 0 0 .26 3.01A2.5 2.5 0 0 0 3 14a2.5 2.5 0 0 0 1.22 2.15 2.5 2.5 0 0 0 2.22 2.23 2.5 2.5 0 0 0 2.53 1.13A2.5 2.5 0 0 0 12 18.5a2.5 2.5 0 0 0 3.03.99 2.5 2.5 0 0 0 2.53-1.13A2.5 2.5 0 0 0 19.78 16.15 2.5 2.5 0 0 0 21 14a2.5 2.5 0 0 0-1-2.01 2.5 2.5 0 0 0 .26-3.01 2.5 2.5 0 0 0-1.32-3 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 12 4.5Z"/><path d="M12 8.5v6"/></svg>
);
const Upload = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
);
const Flame = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
);
const Snowflake = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="2" x2="22" y1="12" y2="12"/><line x1="12" x2="12" y1="2" y2="22"/><path d="m20 20-4-4"/><path d="m4 4 4 4"/><path d="m4 20 4-4"/><path d="m20 4-4 4"/></svg>
);
const Scale = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>
);
const RefreshCw = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>
);
const Info = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
);
const Trash2 = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
);
const Zap = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);

type PredictionType = 'balanced' | 'hot' | 'overdue';
interface PredictionResult {
  numbers: number[];
  type: PredictionType;
  stats: {
    sum: number;
    oddEven: string; 
    hotCount: number;
    coldCount: number;
  }
}

interface DrawRecord {
  numbers: number[];
  date: string;
  id: string;
}

export default function App() {
  const [draws, setDraws] = useState<DrawRecord[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedStrategy, setSelectedStrategy] = useState<PredictionType>('balanced');
  
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/data/tinka.html')
      .then(res => res.text())
      .then(html => parseHtmlContent(html))
      .catch(err => {
        console.error('Error fetching data:', err);
        setError('Error al cargar la base de datos de sorteos.');
      });
  }, []);

  const virtualizer = useVirtualizer({
    count: draws.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 72,
    overscan: 5,
  });

  const statistics = useMemo(() => {
    if (draws.length === 0) return null;

    const frequency: Record<number, number> = {};
    const lastSeenIndex: Record<number, number> = {}; 
    const totalDraws = draws.length;

    // draws ahora contiene objetos con la fecha y arrays de hasta 7 números (6 principales + boliyapa)
    draws.forEach((draw, index) => {
      draw.numbers.forEach(val => {
        frequency[val] = (frequency[val] || 0) + 1;
        lastSeenIndex[val] = index; // Se actualizará hasta el índice más alto (más reciente)
      });
    });

    const gap: Record<number, number> = {};
    for (let i = 1; i <= 50; i++) {
      // Gap es la diferencia entre el total de sorteos y la última vez que se vio
      gap[i] = lastSeenIndex[i] !== undefined ? (totalDraws - 1 - lastSeenIndex[i]) : totalDraws;
    }

    const sortedNums = Object.entries(frequency)
      .map(([numStr, count]) => {
        const num = parseInt(numStr, 10);
        return { num, count, gap: gap[num] };
      })
      .sort((a, b) => b.count - a.count); // Ordenar por frecuencia descendente

    const hotNumbers = sortedNums.slice(0, 15).map(x => x.num); // Top 15 más frecuentes
    
    // Para los fríos, ordenamos por "gap" descendente (los que llevan más tiempo sin salir)
    const coldNumbers = [...sortedNums].sort((a, b) => b.gap - a.gap).slice(0, 15).map(x => x.num);

    return {
      frequency,
      gap,
      sortedNums,
      totalDraws,
      hotNumbers,
      coldNumbers
    };
  }, [draws]);

  const generatePrediction = () => {
    if (!statistics) return;
    setLoading(true);
    
    setTimeout(() => {
        const { hotNumbers, coldNumbers } = statistics;
        let bestCombination: number[] = [];
        let bestScore = -Infinity;
        let attempts = 0;
        const MAX_ATTEMPTS = 2000;
        
        while (attempts < MAX_ATTEMPTS) {
            attempts++;
            const candidate = generateCandidate(statistics, selectedStrategy);
            const score = evaluateCandidate(candidate, statistics, selectedStrategy);
            
            if (score > bestScore) {
                bestScore = score;
                bestCombination = candidate;
            }
            
            // Umbral de perfección según estrategia
            if (bestScore >= 0.95) break; 
        }

        const sorted = bestCombination.sort((a, b) => a - b);
        
        const sum = sorted.reduce((a, b) => a + b, 0);
        const odds = sorted.filter(n => n % 2 !== 0).length;
        const evens = sorted.length - odds;
        const hotCount = sorted.filter(n => hotNumbers.includes(n)).length;
        const coldCount = sorted.filter(n => coldNumbers.includes(n)).length;

        setPrediction({
            numbers: sorted,
            type: selectedStrategy,
            stats: {
                sum,
                oddEven: `${odds}/${evens}`,
                hotCount,
                coldCount
            }
        });
        setLoading(false);
    }, 800);
  };

  const generateCandidate = (stats: any, strategy: PredictionType): number[] => {
    const pool: number[] = [];
    const { frequency, gap } = stats;

    const maxCount = stats.sortedNums[0]?.count || 1;

    for (let i = 1; i <= 50; i++) {
        let weight = 1;
        
        const freqScore = (frequency[i] || 0) / maxCount;
        const gapScore = Math.min((gap[i] || 0), 100) / 100; // Normalizar gap

        if (strategy === 'hot') {
            weight += freqScore * 20; 
        } else if (strategy === 'overdue') {
            weight += gapScore * 25;  
        } else { // Balanced
            weight += freqScore * 5;
            weight += gapScore * 5;
        }

        const entries = Math.max(1, Math.floor(weight * 10));
        for (let k = 0; k < entries; k++) pool.push(i);
    }

    const selection = new Set<number>();
    // Generamos 6 números para la jugada principal
    while (selection.size < 6) {
        const pick = pool[Math.floor(Math.random() * pool.length)];
        selection.add(pick);
    }
    return Array.from(selection);
  };

  const evaluateCandidate = (numbers: number[], stats: any, strategy: PredictionType): number => {
      const sum = numbers.reduce((a, b) => a + b, 0);
      const odds = numbers.filter(n => n % 2 !== 0).length;
      
      // 1. FILTRO DE SUMA ESTRICTO (El 70% de premios caen entre 106 y 170)
      if (sum < 100 || sum > 200) return 0; // Inviable
      let sumBonus = 0;
      if (sum >= 115 && sum <= 165) sumBonus = 0.2; // Rango de oro

      // 2. FILTRO PAR/IMPAR (Ideal 3/3, aceptable 4/2 o 2/4)
      if (odds === 0 || odds === 6) return 0; // Todo par o todo impar es rarisimo
      let oddEvenBonus = 0;
      if (odds === 3) oddEvenBonus = 0.2;
      else if (odds === 2 || odds === 4) oddEvenBonus = 0.1;

      // 3. FILTRO DE CONSECUTIVOS
      const sorted = [...numbers].sort((a,b) => a-b);
      let consecutives = 0;
      for(let i=0; i<sorted.length-1; i++) {
          if (sorted[i+1] === sorted[i]+1) consecutives++;
      }
      if (consecutives > 2) return 0.1; // Penalizar fuertemente si hay más de 2 pares seguidos (ej. 4,5,6)

      // 4. SCORE ESTRATÉGICO
      let strategyScore = 0;
      const hotCount = numbers.filter(n => stats.hotNumbers.includes(n)).length;
      const coldCount = numbers.filter(n => stats.coldNumbers.includes(n)).length;
      
      if (strategy === 'hot') {
          strategyScore = (hotCount / 6) * 0.6; 
      } else if (strategy === 'overdue') {
          strategyScore = (coldCount / 6) * 0.6;
      } else { // Balanced (mezcla de calientes, fríos y neutros)
          if (hotCount >= 2 && hotCount <= 3 && coldCount >= 1 && coldCount <= 2) {
              strategyScore = 0.6; // Combinación perfecta de ley del tercio
          } else {
              strategyScore = 0.3;
          }
      }

      return sumBonus + oddEvenBonus + strategyScore; // Max teórico ~ 1.0
  };

  const parseHtmlContent = (htmlContent: string) => {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, 'text/html');
      
      const tables = doc.querySelectorAll('table');
      if (tables.length === 0) {
        setError('No se encontró ninguna tabla en el archivo HTML.');
        return;
      }

      const extractedDraws: DrawRecord[] = [];

      tables.forEach(table => {
        const rows = Array.from(table.querySelectorAll('tr'));
        rows.forEach(row => {
          const tds = row.querySelectorAll('td');
          // Necesitamos al menos 3 columnas (Sorteo, Fecha y al menos una de resultados)
          if (tds.length >= 3) {
            const dateText = tds[0].textContent?.trim() || '';
            const idText = tds[1].textContent?.trim() || '';
            
            let rowNumbers: number[] = [];
            
            // Leemos TODAS las celdas a partir del índice 2 (ignorando N° de Sorteo y Fecha)
            // Así atrapamos la boliyapa esté donde esté (en la misma celda o en una separada)
            for (let i = 2; i < tds.length; i++) {
               const cellText = tds[i].textContent || '';
               const matches = cellText.match(/\b\d+\b/g); // Atrapa cualquier número
               if (matches) {
                   matches.forEach(m => {
                       const num = parseInt(m, 10);
                       // Solo guardamos números válidos del bombo (1 al 50)
                       if (num >= 1 && num <= 50) {
                           rowNumbers.push(num);
                       }
                   });
               }
            }

            // Eliminamos duplicados (las tablas HTML suelen tener spans de texto ocultos para versión móvil)
            const uniqueNumbers = Array.from(new Set(rowNumbers));

            // Si logramos capturar al menos la jugada principal (6 bolillas)
            if (uniqueNumbers.length >= 6) {
              // Extraemos 7 números como máximo (6 principales + boliyapa)
              extractedDraws.push({
                  id: idText,
                  date: dateText,
                  numbers: uniqueNumbers.slice(0, 7)
              });
            }
          }
        });
      });

      if (extractedDraws.length === 0) {
          setError('No se pudieron extraer las bolillas. Verifica que el archivo sea el histórico correcto.');
          return;
      }

      setDraws(extractedDraws);
      setPrediction(null);
      setError(null);
    } catch (err) {
      setError('Error interno al procesar el archivo.');
      console.error(err);
    }
  };

  // No se requiere carga manual ya que el histórico se lee directamente.

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans pb-12 selection:bg-yellow-500/30">
      {/* Header Premium */}
      <header className="bg-slate-950 border-b border-yellow-600/30 sticky top-0 z-50 backdrop-blur-md bg-opacity-90 shadow-2xl">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="bg-yellow-500 p-2 rounded-xl shadow-[0_0_20px_rgba(234,179,8,0.3)]">
              <Sparkles className="text-black w-7 h-7" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-white tracking-tighter italic">
                TINKA<span className="text-yellow-500">EXPERT</span>
              </h1>
              <p className="text-[10px] text-yellow-500/70 uppercase tracking-[0.2em] font-bold -mt-1">IA Predictiva (+Boliyapa)</p>
            </div>
          </div>
          {draws.length > 0 && (
             <div className="flex items-center gap-3 bg-slate-900 px-4 py-2 rounded-full border border-slate-800 shadow-inner">
                <div className="flex items-center gap-6">
                    <a href="/como-funciona" className="text-sm font-semibold text-slate-400 hover:text-yellow-400 transition-colors flex items-center gap-2">
                        <Info size={16} /> ¿Cómo funciona la IA?
                    </a>
                    <div className="hidden sm:flex flex-col items-end border-l border-slate-700 pl-6">
                        <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                            <span className="text-sm font-bold text-slate-300">
                                <span className="text-white">{draws.length}</span> Sorteos Procesados
                            </span>
                        </div>
                        {draws.length > 0 && (
                            <span className="text-xs text-slate-500 mt-1">
                                Último Sorteo: <span className="text-yellow-500 font-semibold">{draws[0].date}</span>
                            </span>
                        )}
                    </div>
                </div>
             </div>
          )}
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10 space-y-8">
        
        {/* Pantalla de Carga de Archivo */}
        {!draws.length && !error && (
          <div className="text-center py-32 px-4 flex flex-col items-center justify-center space-y-6">
             <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
             <h2 className="text-2xl font-bold text-slate-300">Cargando y procesando la matriz histórica...</h2>
          </div>
        )}
        {error && (
            <div className="text-center py-32 px-4">
                 <div className="inline-flex items-center gap-2 bg-red-950/50 border border-red-900/50 text-red-400 font-bold py-4 px-6 rounded-2xl">
                     <Info size={24}/> {error}
                 </div>
            </div>
        )}

        {/* Dashboard Principal */}
        {draws.length > 0 && statistics && (
          <div className="grid lg:grid-cols-12 gap-8 animate-in fade-in zoom-in-95 duration-500">
            
            {}
            <div className="lg:col-span-4 space-y-6">
                
                <div className="bg-slate-900/80 backdrop-blur rounded-3xl p-6 border border-slate-700 shadow-2xl">
                    <h3 className="text-yellow-500 font-black text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
                        <BrainCircuit size={18}/> Modelo Neuronal
                    </h3>
                    
                    <div className="space-y-4">
                        <button 
                            onClick={() => setSelectedStrategy('balanced')}
                            className={`w-full text-left p-5 rounded-2xl border-2 transition-all flex items-start gap-4 ${selectedStrategy === 'balanced' ? 'bg-yellow-500/10 border-yellow-500' : 'bg-slate-950 border-slate-800 hover:border-slate-600'}`}
                        >
                            <div className={`p-2.5 rounded-xl shrink-0 ${selectedStrategy === 'balanced' ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20' : 'bg-slate-800 text-slate-400'}`}>
                                <Scale size={20}/>
                            </div>
                            <div>
                                <span className={`font-black text-lg block mb-1 ${selectedStrategy === 'balanced' ? 'text-yellow-400' : 'text-slate-300'}`}>Equilibrada</span>
                                <span className="text-xs text-slate-500 font-medium leading-relaxed">Balance perfecto entre sumas (106-170), pares/impares y ley del tercio. <strong className="text-slate-300">Recomendado.</strong></span>
                            </div>
                        </button>

                        <button 
                            onClick={() => setSelectedStrategy('hot')}
                            className={`w-full text-left p-5 rounded-2xl border-2 transition-all flex items-start gap-4 ${selectedStrategy === 'hot' ? 'bg-red-500/10 border-red-500' : 'bg-slate-950 border-slate-800 hover:border-slate-600'}`}
                        >
                            <div className={`p-2.5 rounded-xl shrink-0 ${selectedStrategy === 'hot' ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'bg-slate-800 text-slate-400'}`}>
                                <Flame size={20}/>
                            </div>
                            <div>
                                <span className={`font-black text-lg block mb-1 ${selectedStrategy === 'hot' ? 'text-red-400' : 'text-slate-300'}`}>La Racha</span>
                                <span className="text-xs text-slate-500 font-medium leading-relaxed">Agrupa los números "calientes" que están repitiéndose constantemente en los últimos meses.</span>
                            </div>
                        </button>

                        <button 
                            onClick={() => setSelectedStrategy('overdue')}
                            className={`w-full text-left p-5 rounded-2xl border-2 transition-all flex items-start gap-4 ${selectedStrategy === 'overdue' ? 'bg-blue-500/10 border-blue-500' : 'bg-slate-950 border-slate-800 hover:border-slate-600'}`}
                        >
                            <div className={`p-2.5 rounded-xl shrink-0 ${selectedStrategy === 'overdue' ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20' : 'bg-slate-800 text-slate-400'}`}>
                                <Snowflake size={20}/>
                            </div>
                            <div>
                                <span className={`font-black text-lg block mb-1 ${selectedStrategy === 'overdue' ? 'text-blue-400' : 'text-slate-300'}`}>El Golpe</span>
                                <span className="text-xs text-slate-500 font-medium leading-relaxed">Persigue los números rezagados ("fríos"). La teoría de reversión a la media: si no sale, ya le toca.</span>
                            </div>
                        </button>
                    </div>

                    <button 
                        onClick={generatePrediction}
                        disabled={loading}
                        className="w-full mt-8 py-5 bg-gradient-to-b from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500 text-black font-black text-xl rounded-2xl shadow-[0_10px_20px_rgba(234,179,8,0.2)] hover:shadow-[0_10px_30px_rgba(234,179,8,0.4)] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-wait"
                    >
                        {loading ? <RefreshCw className="animate-spin" size={24}/> : <Sparkles className="fill-black" size={24}/>}
                        {loading ? 'CALCULANDO MATRIZ...' : 'GENERAR JUGADA'}
                    </button>
                </div>

                {}
                <div className="bg-slate-900/50 rounded-3xl p-6 border border-slate-800 relative overflow-hidden">
                    <div className="absolute top-2 right-2 text-slate-700 opacity-20">
                        <Zap size={100} />
                    </div>
                    <h3 className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-5 relative z-10">Visor del Historial <span className="text-yellow-500 ml-1 text-[10px]">(+Boliyapa)</span></h3>
                    
                    <div className="space-y-4 relative z-10">
                        <div>
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-slate-400 text-sm font-medium flex items-center gap-2"><Flame size={14} className="text-red-400"/> Top Caliente</span>
                                <span className="text-red-400 font-black text-xl">{statistics.hotNumbers[0]}</span>
                            </div>
                            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                                <div className="bg-gradient-to-r from-red-600 to-red-400 h-full rounded-full" style={{width: '90%'}}></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-slate-400 text-sm font-medium flex items-center gap-2"><Snowflake size={14} className="text-blue-400"/> Top Rezagado</span>
                                <span className="text-blue-400 font-black text-xl">{statistics.coldNumbers[0]}</span>
                            </div>
                            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                                <div className="bg-gradient-to-r from-blue-600 to-blue-400 h-full rounded-full" style={{width: '100%'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {}
            <div className="lg:col-span-8">
                <div className="h-full bg-slate-950 rounded-3xl p-8 lg:p-12 border border-slate-800 relative overflow-hidden flex flex-col items-center justify-center shadow-2xl">
                    
                    {/* Efecto de fondo sutil */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/10 via-transparent to-transparent pointer-events-none"></div>

                    {prediction ? (
                        <div className="relative z-10 w-full animate-in zoom-in-95 fade-in duration-500">
                            
                            <div className="text-center mb-12">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 mb-4 shadow-sm">
                                    <div className={`w-2 h-2 rounded-full ${prediction.type === 'balanced' ? 'bg-yellow-500' : prediction.type === 'hot' ? 'bg-red-500' : 'bg-blue-500'}`}></div>
                                    <span className="text-slate-300 text-xs font-bold uppercase tracking-wider">
                                        Filtro: {prediction.type === 'balanced' ? 'Equilibrio Óptimo' : prediction.type === 'hot' ? 'Tendencia Activa' : 'Reversión a la Media'}
                                    </span>
                                </div>
                                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight drop-shadow-md">
                                    TU COMBINACIÓN
                                </h2>
                            </div>

                            {/* Renderizado de Bolillas */}
                            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-16">
                                {prediction.numbers.map((num, i) => (
                                    <div key={i} className="group relative">
                                        {/* Bolilla 3D */}
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-yellow-100 via-yellow-400 to-yellow-600 shadow-[inset_-4px_-4px_10px_rgba(0,0,0,0.3),0_10px_20px_rgba(0,0,0,0.5)] flex items-center justify-center border-4 border-yellow-200/50 transform transition-transform duration-300 group-hover:-translate-y-3 cursor-default">
                                            <span className="text-black font-black text-3xl sm:text-4xl lg:text-5xl drop-shadow-[0_2px_2px_rgba(255,255,255,0.5)]">
                                                {num}
                                            </span>
                                        </div>
                                        {/* Sombra debajo */}
                                        <div className="w-10 h-2 bg-black/40 rounded-full mx-auto mt-3 blur-sm group-hover:scale-75 group-hover:opacity-50 transition-all duration-300"></div>
                                        
                                        {/* Tooltip con datos del número */}
                                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs py-1.5 px-3 rounded-lg border border-slate-700 whitespace-nowrap shadow-xl pointer-events-none">
                                            Histórico total: <strong>{statistics.frequency[num] || 0}</strong> veces
                                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Métricas de Validación */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                                <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 text-center">
                                    <span className="text-slate-500 text-[10px] uppercase font-bold tracking-widest block mb-2">Suma Total</span>
                                    <span className={`text-2xl font-black block ${prediction.stats.sum >= 106 && prediction.stats.sum <= 170 ? 'text-green-400' : 'text-yellow-500'}`}>
                                        {prediction.stats.sum}
                                    </span>
                                    <span className="text-[9px] text-slate-600 uppercase mt-1 block">Rango ideal: 106-170</span>
                                </div>
                                <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 text-center">
                                    <span className="text-slate-500 text-[10px] uppercase font-bold tracking-widest block mb-2">Impar/Par</span>
                                    <span className="text-2xl font-black text-white block">
                                        {prediction.stats.oddEven}
                                    </span>
                                    <span className="text-[9px] text-slate-600 uppercase mt-1 block">Ideal: 3/3 o 4/2</span>
                                </div>
                                <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 text-center">
                                    <span className="text-slate-500 text-[10px] uppercase font-bold tracking-widest block mb-2">Núm. Calientes</span>
                                    <span className="text-2xl font-black text-red-400 block">
                                        {prediction.stats.hotCount}<span className="text-sm text-slate-600">/6</span>
                                    </span>
                                    <span className="text-[9px] text-slate-600 uppercase mt-1 block">Top 15 Frecuentes</span>
                                </div>
                                <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 text-center">
                                    <span className="text-slate-500 text-[10px] uppercase font-bold tracking-widest block mb-2">Núm. Fríos</span>
                                    <span className="text-2xl font-black text-blue-400 block">
                                        {prediction.stats.coldCount}<span className="text-sm text-slate-600">/6</span>
                                    </span>
                                    <span className="text-[9px] text-slate-600 uppercase mt-1 block">Top 15 Rezagados</span>
                                </div>
                            </div>
                            
                        </div>
                    ) : (
                        <div className="text-center relative z-10">
                            <div className="w-24 h-24 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 border border-slate-800 shadow-inner">
                                <BrainCircuit size={40} className="text-slate-600"/>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-300 mb-2">IA en espera</h3>
                            <p className="text-slate-500 max-w-sm mx-auto">Selecciona una estrategia en el panel izquierdo y presiona "Generar Jugada" para obtener tus números.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Tabla Virtualizada del Historial */}
            <div className="mt-12 lg:col-span-12 bg-slate-900/80 backdrop-blur rounded-3xl p-6 border border-slate-700 shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-700">
                <h3 className="text-yellow-500 font-black text-xl tracking-tighter mb-6 flex items-center gap-2">
                    <Zap size={24}/> Historial de Sorteos Procesados
                </h3>
                
                {/* Cabeceras de tabla */}
                <div className="grid grid-cols-12 gap-4 pb-4 border-b border-slate-800 text-slate-400 font-bold text-sm uppercase tracking-wider px-4">
                    <div className="col-span-3 sm:col-span-2 text-left">Sorteo / Fecha</div>
                    <div className="col-span-6 sm:col-span-8 text-center">Jugada Principal</div>
                    <div className="col-span-3 sm:col-span-2 text-right">Boliyapa</div>
                </div>

                {/* Contenedor virtual */}
                <div 
                    ref={parentRef}
                    className="h-[400px] overflow-auto mt-4 pr-2"
                >
                    <div
                        style={{
                            height: `${virtualizer.getTotalSize()}px`,
                            width: '100%',
                            position: 'relative',
                        }}
                    >
                        {virtualizer.getVirtualItems().map((virtualItem) => {
                            const draw = draws[virtualItem.index];
                            const mainBalls = draw.numbers.slice(0, 6);
                            const boliyapa = draw.numbers[6];

                            return (
                                <div
                                    key={virtualItem.key}
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: `${virtualItem.size}px`,
                                        transform: `translateY(${virtualItem.start}px)`,
                                    }}
                                    className="px-4 hover:bg-slate-800/50 transition-colors rounded-xl flex items-center"
                                >
                                    <div className="grid grid-cols-12 gap-4 w-full items-center py-3 border-b border-slate-800/50">
                                        <div className="col-span-3 sm:col-span-2 flex flex-col justify-center text-left">
                                            <span className="text-slate-400 font-black text-lg">#{draw.id || virtualItem.index + 1}</span>
                                            {draw.date && <span className="text-slate-500 text-xs mt-0.5 font-medium">{draw.date}</span>}
                                        </div>
                                        <div className="col-span-6 sm:col-span-8 flex flex-wrap justify-center gap-2 sm:gap-4">
                                            {mainBalls.map((num, i) => (
                                                <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-slate-300 shadow-sm">
                                                    {num}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="col-span-3 sm:col-span-2 flex justify-end">
                                            {boliyapa ? (
                                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-yellow-500/20 border border-yellow-500/50 flex items-center justify-center font-black text-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                                                    {boliyapa}
                                                </div>
                                            ) : (
                                                <span className="text-slate-600 text-xs italic">N/A</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 mt-12 py-8 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 text-center flex flex-col items-center">
          <p className="text-slate-500 text-sm mb-4 max-w-2xl leading-relaxed">
            Tinka Expert AI es una herramienta de análisis estadístico independiente diseñada para maximizar tus probabilidades de éxito mediante modelos matemáticos. Para registrar y realizar tus jugadas oficiales, visita la web oficial: <a href="https://www.latinka.com.pe" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 transition-colors font-semibold underline underline-offset-4 decoration-yellow-500/30 hover:decoration-yellow-400">www.latinka.com.pe</a>.
          </p>
          <p className="text-slate-400 font-medium flex items-center justify-center gap-2">
            Hecho con <span className="text-red-500 animate-pulse text-lg">❤</span> por 
            <a href="mailto:info@peramas.com" className="text-yellow-500 hover:text-yellow-400 transition-colors font-bold underline underline-offset-4 decoration-yellow-500/30 hover:decoration-yellow-400">
                Joan Peramas
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}