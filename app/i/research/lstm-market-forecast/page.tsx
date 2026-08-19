import { IDetailShell } from "@/components/IDetailShell";

export const metadata = { title: "Intraday Market Forecasting with LSTM — Tridhm Garg" };

export default function Page() {
  return (
    <IDetailShell
      eyebrow="IEEE Research Paper · Co-Author"
      title="Intraday Market Analysis and Forecasting with LSTM Networks"
      meta="2025 5th International Conference on Advancement in Electronics & Communication Engineering (AECE) · November 2025"
      tags={["Python", "LSTM", "Time Series", "Pandas"]}
      externalHref="https://ieeexplore.ieee.org/iel8/11386518/11386458/11386631.pdf"
      externalLabel="View on IEEE Xplore"
    >
      <p>
        This paper asks whether a model can forecast a stock&rsquo;s daily high and low
        price using nothing but its own trading history — no news sentiment, no
        macroeconomic indicators, just the numbers the market has already produced.
      </p>
      <p>
        The dataset was ten years of daily price data for{" "}
        <strong>Infosys Ltd. (2015–2025)</strong>, pulled from Yahoo Finance. The values
        were normalized with <strong>Min-Max scaling</strong>, then reshaped into{" "}
        <strong>1,500-timestep sequences</strong> — long historical windows the model
        could draw patterns from.
      </p>
      <p>
        The architecture uses <strong>LSTM (Long Short-Term Memory) networks</strong>, a
        type of recurrent neural network built to recognize patterns across sequences
        over time. Rather than one model predicting both the day&rsquo;s high and low,{" "}
        <strong>two dedicated LSTM models</strong> were trained separately, each with
        the Adam optimizer and mean squared error loss.
      </p>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg border p-4" style={{ borderColor: "rgba(20,24,20,0.12)", background: "#ffffff" }}>
          <p className="text-[11px] opacity-55 mb-2">HIGH-PRICE MODEL</p>
          <p className="text-[13px]">R² = 0.954</p>
          <p className="text-[13px]">MAE = 34.01</p>
          <p className="text-[13px]">RMSE = 44.26</p>
        </div>
        <div className="rounded-lg border p-4" style={{ borderColor: "rgba(20,24,20,0.12)", background: "#ffffff" }}>
          <p className="text-[11px] opacity-55 mb-2">LOW-PRICE MODEL</p>
          <p className="text-[13px]">R² = 0.947</p>
          <p className="text-[13px]">MAE = 35.26</p>
          <p className="text-[13px]">RMSE = 46.41</p>
        </div>
      </div>
      <p>
        An R² above 0.94 on both models means the networks explain the large majority
        of the variance in next-day price movement using historical pattern alone. The
        paper was co-authored and published to IEEE Xplore through the AECE conference.
      </p>
    </IDetailShell>
  );
}
