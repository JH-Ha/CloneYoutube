class ActionButton {
    constructor($target, data) {
        this.$target = $target;
        this.data = data;
    }
    render() {
        let $li = document.createElement("li");
        let $button = document.createElement("button");
        let $svg = document.createElement("svg");
        for (let i = 0; i < this.data.classList.length; i++) {
            $svg.classList.add(this.data.classList[i]);
        }
        let $span = document.createElement("span");
        $span.textContent = this.data.textContent;
        $button.appendChild($svg);
        $button.appendChild($span);
        $li.appendChild($button);
        this.$target.appendChild($li);

        if (this.data.type === "number") {
            $li.addEventListener("click", () => {
                console.log("click");
                if (!$svg.classList.contains("active")) {
                    this.data.classList.push("active");
                }

            })
        }

    }
}

export default ActionButton;