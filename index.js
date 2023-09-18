class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, "");
  }
  static titleize(string) {
    const exceptions = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];
    let words = string.split(" ");
    words = words.map((word, index) => {
      if (index === 0 || !exceptions.includes(word)) {
        word = this.capitalize(word);
      }
      return word;
    });
    return words.join(" ");
  }
}
