export const lossless = [
  {
    title: "Intro to Multimedia Systems Seminar",
    content: "Lossless Compression\nmaterial adapted from Fundamentals of Multimedia, 3rd ed. by Drs. Ze-Nian Li, Mark S. Drew, Jiangchuan Liu\nand lecture slides by Dr. Jiangchuan Liu"
  },
  {
    title: "Compression & Coding",
    content: "compression: process of coding that reduces total number of bits needed to represent specific info"
  },
  {
    title: "Coding Definition",
    content: "coding: substitute some symbols for other symbols"
  },
  {
    title: "Data Compression Scheme",
    content: "data compression scheme (on a high level):",
    image: "image-1.png"
  },
  {
    title: "Compression Components",
    content: "output of encoder = code/codewords"
  },
  {
    title: "Types of Compression",
    content: "lossy vs lossless compression"
  },
  {
    title: "Video Resolutions",
    content: "720p: 1280 x 720\n1080p: 1920 x 1080",
    image: "image.png"
  },
  {
    title: "Video Storage: Pixels",
    content: "for 1 min of anime at 720p:\npixels per frame = 1280 * 720 = 921,600 pixels"
  },
  {
    title: "Video Storage: Bits",
    content: "modern anime use 10 bit colour depth usually\nbits per frame = 921,600 * 30 = 27,648,000 bits"
  },
  {
    title: "Video Storage: Final Size",
    content: "Bytes per second = 3,456,000 * 24 = 82,944,000 bytes\nBytes for one minute = 82,944,000 * 60 = 4,976,640,000 bytes\n(4.977 GB)"
  },
  {
    title: "Compression Ratio",
    content: "compression ratio = B₀/B₁\nhigher = better"
  },
  {
    title: "Compression Ratio Edge Case",
    content: "what if B1 = 0?\n\nthe doctor story\nto save time, doc doesn't call -> b1 = 0?"
  },
  {
    title: "Why Compression Works",
    content: "why is compression possible?\n\ninformation redundancy"
  },
  {
    title: "Information Theory Question",
    content: "how to measure \"information\"?",
    image: "image.png"
  },
  {
    title: "Information Theory Basics",
    content: "info -> measure of uncertainty/surprise\nless probable = more info"
  },
  {
    title: "Information Example",
    content: "covid case confirmed! (feb 2020)\ncovid case confirmed! (feb 2024)"
  },
  {
    title: "Information Formula",
    content: "I(A) = f(P(A))\n\nclaude shannon: self information\nI(A) = log_b 1/P(A)",
    image: "image-2.png"
  },
  {
    title: "Shannon's Entropy Formula",
    content: "our unit: 2 for bits\n\nη = H(S) = Σ pᵢ log₂ 1/pᵢ = -Σ pᵢ log₂ pᵢ"
  },
  {
    title: "Shannon's Entropy Meaning",
    content: "avg self info\navg min number of bits needed to losslessly represent 1 output of source\navg amt of info contained per symbol"
  },
  {
    title: "Shannon's Entropy Result",
    content: "avg number of bits to code each symbol ≥ η"
  },
  {
    title: "Probability Distribution",
    content: "P(A) = x, P(B) = 1-x",
    image: "image-3.png"
  },
  {
    title: "Distribution Examples",
    content: "uniform: log2 (256) = 8\n2 vals: 0.92",
    image: "image-4.png"
  },
  {
    title: "Morse Code Ambiguity",
    content: ". . . - - - \nEEE? A? V? 2? O? M? J?",
    image: "image-5.png"
  },
  {
    title: "Prefix Free Codes",
    content: "prefix free:\n- no codeword is prefix of another\n- uniquely decodeable"
  },
  {
    title: "Shannon-Fano Method",
    content: "top down\nsort symbols by frequency then recursively divide till theres only 1 symbol"
  },
  {
    title: "Shannon-Fano Properties",
    content: "L/R order doesn't matter (tree not unique)\nbalance: larger on left\n\navg codeword length: take avg of all pi * num of bits"
  },
  {
    title: "Huffman Coding Basics",
    content: "bottom up approach\nunique prefix\nalways produces optimal"
  },
  {
    title: "Huffman Properties",
    content: "most frequent: shortest\nleast: longest\nalso not unique"
  },
  {
    title: "Huffman Limitations",
    content: "limitations:\n- needs prob distb\n- min codeword len is 1 bit"
  },
  {
    title: "Extended Huffman",
    content: "symbols grouped together\nA B A B B A A B -> AB AB BA AB"
  },
  {
    title: "Extended Huffman Challenge",
    content: "new alphabet: {AB BA AA BB}\nsize increases exponentially!"
  },
  {
    title: "LZW Compression",
    content: "LZW: Lempel-Ziv-Welch\npatent expired",
    image: "image-6.png"
  },
  {
    title: "LZW Properties",
    content: "uses fixed length codewords to repr variable len strings\nencoder + decoder both dynamically build same dict"
  },
  {
    title: "Arithmetic Coding Basics",
    content: "partition into recursive intervals\neach interval size is proportional to prob"
  },
  {
    title: "Arithmetic Coding Properties",
    content: "once ur in an interval u never get out\nfinal interval: any num ok\n\ndecoder works as the interval partition is unique"
  },
  {
    title: "Arithmetic Coding Problems",
    content: "problems:\n- no output till end\n- precision error/floating point roundoff error"
  },
  {
    title: "Scaling Example",
    content: "as range shrinks, most significant bits become the same\nex: 0.7712 and 0.773504 = 0.110001*0*... and 0.110001*1*..."
  },
  {
    title: "Incremental Coding",
    content: "E1: [0, 0.5) -> output 0 and x 2 (left shift)\nE2: [0.5, 1) -> output 1 and 2(x - 0.5)\n\ninterval doesnt matter, only final output"
  }
]; 