import Link from "next/link";
import { DetailShell } from "@/components/DetailShell";

export const metadata = { title: "Artificial Intelligence — Tridhm Garg" };

export default function Page() {
  return (
    <DetailShell
      eyebrow="Interested In · 01"
      title="Artificial Intelligence — I Want to Understand It, Not Just Use It"
      meta="On architectures, datasets, and asking why instead of just what"
      tags={["Machine Learning", "Research", "Applied AI"]}
    >
      <p>
        AI is probably my biggest interest, but what interests me about it goes way
        beyond using ChatGPT or learning how to code a model.
      </p>
      <p>I want to understand how AI got here.</p>
      <p>
        I&rsquo;m interested in how artificial intelligence evolved from basic
        rule-based systems and search algorithms into machine learning, neural
        networks, CNNs, LSTMs, transformers, and the much larger models we have
        today. Every time a new type of model appears, I want to know what changed.
        What could the previous model not do? Why was a new architecture needed? What
        problem was researchers trying to solve?
      </p>
      <p>Then there is the part that interests me even more: the data.</p>
      <p>
        I used to think the model was basically the most important part of machine
        learning. The more I learned, the more I realized that the model is only one
        part of the story. Where did the dataset come from? How was it cleaned? What
        was included or left out? How much data was used for training versus
        testing? What happens when the model sees something completely different
        from what it learned from?
      </p>
      <p>
        My own research started giving me a chance to explore these questions instead
        of just reading about them. I used{" "}
        <Link href="/research/satellite-poverty-cnn" className="underline">
          CNNs with satellite imagery for poverty prediction
        </Link>
        , worked with training and testing datasets, and achieved about 90% accuracy
        with a custom CNN. I later worked with{" "}
        <Link href="/research/lstm-market-forecast" className="underline">
          LSTM networks for market forecasting
        </Link>
        . Through different AI programs, I also learned about neural networks, CNNs,
        deep learning, NLP, computer vision, Python, PyTorch, pandas, NumPy, and
        scikit-learn.
      </p>
      <p>But I don&rsquo;t want to stop at:</p>
      <p className="italic">&ldquo;The model got 98% accuracy.&rdquo;</p>
      <p>My next question is:</p>
      <p className="italic">Why?</p>
      <p>
        Why did this model perform better than another one? Was it the architecture?
        Was it the dataset? Was it preprocessing? Was it the parameters? What did the
        model get wrong? And would it still work on completely new data?
      </p>
      <p>Then comes the question that matters even more to me:</p>
      <p className="italic">What can we actually do with it?</p>
      <p>That&rsquo;s where my interest in AI connects with people.</p>
      <p>
        I&rsquo;ve already explored AI for poverty prediction, and my other projects
        have made me think about how technology could help communities.
      </p>
      <p>
        I&rsquo;m interested in AI applications involving poverty, mental health,
        education, communities, the environment, public services, and other problems
        that actually affect people&rsquo;s lives.
      </p>
      <p>
        At the same time, I don&rsquo;t think every problem needs an AI model just
        because AI is exciting. I want to be able to ask both questions:
      </p>
      <p className="italic">&ldquo;Can we build this?&rdquo;</p>
      <p>and</p>
      <p className="italic">&ldquo;Should we build this, and who will it actually help?&rdquo;</p>
      <p>That&rsquo;s really why I&rsquo;m interested in AI.</p>
      <blockquote className="border-l-2 pl-4 italic opacity-90" style={{ borderColor: "#0d9463" }}>
        I don&rsquo;t just want to become someone who knows how to use AI. I want to
        understand how it evolved, how the models actually work, how they learn from
        data, why they sometimes fail, and eventually how we can use them responsibly
        to make people&rsquo;s lives better.
      </blockquote>
    </DetailShell>
  );
}
