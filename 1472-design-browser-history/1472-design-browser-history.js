class BrowserHistory{
    constructor(homepage) {
        this.pages = {
            url: homepage,
            back: null,
            next: null
        };
    }

    visit(url) {
        this.pages.next = {
            url,
            back: this.pages,
            next:null
        }
        this.pages = this.pages.next;

    }

    back(steps) {
        while(steps && this.pages.back) {
            this.pages = this.pages.back;
            steps--;
        }
        return this.pages.url;
    }

    forward(steps) {
        while(steps && this.pages.next) {
            this.pages = this.pages.next;
            steps--;
        }
        return this.pages.url;
    }
}
/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */