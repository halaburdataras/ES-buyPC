import React, { useState } from "react";
import Conclusion from "./Conclusion";
import Question from "./Question";

export default () => {
  const [model, setModel] = useState("");
  const [purpose, setPurpose] = useState("");
  const [price, setPrice] = useState("");
  const [OS, setOS] = useState("");
  const [procPrice, setProcPrice] = useState("");
  const [proc, setProc] = useState("");
  const [videoPrice, setVideoPrice] = useState("");
  const [video, setVideo] = useState("");
  const [ram, setRam] = useState("");
  const [memoryType, setMemoryType] = useState("");
  const [memorySize, setMemorySize] = useState("");
  const [monitor, setMonitor] = useState("");

  const findPC = () => {
    let answer = `I think you should buy this components: Processor: `;
    if (proc === "intel") {
      if (procPrice === "expensive") answer += `Intel core i9(24k UAH), `;
      else answer += `Intel core i7(11k UAH), `;
    } else if (procPrice === "expensive") answer += `AMD Ryzen 9(18k UAH), `;
    else answer += `AMD Ryzen 7(13k UAH), `;

    answer += `Video Card: `;
    if (video === "nvidia") {
      if (videoPrice === "expensive") answer += `GeForce RTX 3070(50k UAH), `;
      else answer += `GeForce GTX 970M (8k UAH), `;
    } else if (videoPrice === "expensive")
      answer += `Radeon RX 6700(48k UAH), `;
    else answer += `Radeon R9(7k UAH), `;

    answer += `RAM: `;
    if (ram === "more") answer += `Kingston Fury DDR4 16GB(2.5k UAH), `;
    else answer += `Kingston Fury DDR4 8GB(1k UAH), `;

    answer += `Memory: `;
    if (memoryType === "ssd") {
      if (memorySize === "more") answer += `Kingston SSD 512GB(2k UAH), `;
      else answer += `Kingston SSD 256GB(1k UAH), `;
    } else if (memorySize === "more") answer += `WD Black 1024GB(1.7k UAH), `;
    else answer += `WD Black 512GB(1k UAH), `;

    answer += `Monitor: `;
    if (monitor === "good") answer += `Phillips 27" 2k monitor E-Line(7k UAH) `;
    else answer += `Lenovo Sink Vision 23.8" FullHD(4.5k UAH), `;

    return answer;
  };

  if (!model) {
    return (
      <Question
        title="1"
        question="What kind of PC do you need?"
        answers={[
          { title: "Laptop", meaning: "laptop" },
          { title: "Block", meaning: "pc" },
        ]}
        setAnswer={setModel}
      />
    );
  }
  //Laptop
  if (model === "laptop") {
    if (!purpose) {
      return (
        <Question
          title="2"
          question="Do you need a gaming PC?"
          answers={[
            { title: "Yes", meaning: "gaming" },
            { title: "No", meaning: "office" },
          ]}
          setAnswer={setPurpose}
        />
      );
    }
    if (purpose === "gaming") {
      if (!price) {
        return (
          <Question
            title="3"
            question="What price do you looking for?"
            answers={[
              { title: "more than 40000 UAH", meaning: "expensive" },
              { title: "less than 40000 UAH", meaning: "cheap" },
            ]}
            setAnswer={setPrice}
          />
        );
      }
      if (price === "expensive") {
        return (
          <Conclusion title="i think you should buy Acer Nitro 5(45k UAH)" />
        );
      }
      return (
        <Conclusion title="i think you should buy Lenovo Legion 5(35k UAH)" />
      );
    }
    if (!OS) {
      return (
        <Question
          title="3"
          question="Do you need OS Windows on your laptop?"
          answers={[
            { title: "Yes", meaning: "windows" },
            { title: "No", meaning: "ubuntu" },
          ]}
          setAnswer={setOS}
        />
      );
    }
    if (OS === "windows") {
      if (!price) {
        return (
          <Question
            title="4"
            question="What price do you looking for?"
            answers={[
              { title: "more than 25000 UAH", meaning: "expensive" },
              { title: "less than 25000 UAH", meaning: "cheap" },
            ]}
            setAnswer={setPrice}
          />
        );
      }
      if (price === "expensive") {
        return (
          <Conclusion title="i think you should buy Asus zenbook 15(37k UAH)" />
        );
      }
      return (
        <Conclusion title="i think you should buy Dell vostro 15 3500(21.5k UAH)" />
      );
    }
    if (!price) {
      return (
        <Question
          title="4"
          question="What price do you looking for?"
          answers={[
            { title: "more than 15000 UAH", meaning: "expensive" },
            { title: "less than 15000 UAH", meaning: "cheap" },
          ]}
          setAnswer={setPrice}
        />
      );
    }
    if (price === "expensive") {
      return (
        <Conclusion title="i think you should buy Dell vostro 3500(25k UAH)" />
      );
    }
    return <Conclusion title="i think you should buy Pixus Rise(8k UAH)" />;
  }

  //PC - Proc
  if (!procPrice) {
    return (
      <Question
        title="2"
        question="What Processor price do you looking for?"
        answers={[
          { title: "more than 15000 UAH", meaning: "expensive" },
          { title: "less than 15000 UAH", meaning: "cheap" },
        ]}
        setAnswer={setProcPrice}
      />
    );
  }
  if (!proc) {
    return (
      <Question
        title="3"
        question="What Processor model do you looking for?"
        answers={[
          { title: "Intel", meaning: "intel" },
          { title: "AMD", meaning: "amd" },
        ]}
        setAnswer={setProc}
      />
    );
  }
  //Video
  if (!videoPrice) {
    return (
      <Question
        title="4"
        question="What Video Card price do you looking for?"
        answers={[
          { title: "more than 30000 UAH", meaning: "expensive" },
          { title: "less than 30000 UAH", meaning: "cheap" },
        ]}
        setAnswer={setVideoPrice}
      />
    );
  }
  if (!video) {
    return (
      <Question
        title="5"
        question="What Processor model do you looking for?"
        answers={[
          { title: "Nvidia", meaning: "nvidia" },
          { title: "AMD", meaning: "amd" },
        ]}
        setAnswer={setVideo}
      />
    );
  }
  //RAM
  if (!ram) {
    return (
      <Question
        title="6"
        question="What amount of RAM do you looking for?"
        answers={[
          { title: "8GB", meaning: "less" },
          { title: "16GB", meaning: "more" },
        ]}
        setAnswer={setRam}
      />
    );
  }
  //Memory
  if (!memoryType) {
    return (
      <Question
        title="7"
        question="What Memory Type do you looking for?"
        answers={[
          { title: "SSD", meaning: "ssd" },
          { title: "HDD", meaning: "hdd" },
        ]}
        setAnswer={setMemoryType}
      />
    );
  }
  if (!memorySize) {
    if (memoryType === "ssd") {
      return (
        <Question
          title="8"
          question="What memory Size do you looking for?"
          answers={[
            { title: "256GB", meaning: "less" },
            { title: "512GB", meaning: "more" },
          ]}
          setAnswer={setMemorySize}
        />
      );
    }
    return (
      <Question
        title="8"
        question="What memory Size do you looking for?"
        answers={[
          { title: "512GB", meaning: "less" },
          { title: "1024GB", meaning: "more" },
        ]}
        setAnswer={setMemorySize}
      />
    );
  }
  //Monitor
  if (!monitor) {
    return (
      <Question
        title="9"
        question="What Monitor do you looking for?"
        answers={[
          { title: "2k", meaning: "cool" },
          { title: "FullHD", meaning: "bad" },
        ]}
        setAnswer={setMonitor}
      />
    );
  }

  return <Conclusion title={findPC()} />;
};
