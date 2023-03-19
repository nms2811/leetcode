class WordDictionary {
    constructor(){
        this.dictionary = {};
    }

    addWord(word) {
        let root = this.dictionary;
        for(let c of word) {
            if(!root[c]) root[c] = {};
            root = root[c];
        }
        root.isEnd = true;
    }

    search(word){
      const traverse = (node, i) => {
        const char = word[i];

        if(i === word.length) return node.isEnd || false;

        if(char === '.') {
          for(const key in node) {
            if(traverse(node[key], i + 1)) return true;
          }
        } else if(node[char]) {
            return traverse(node[char], i + 1);
        }
        return false;
      }

      return traverse(this.dictionary, 0)
    }
}