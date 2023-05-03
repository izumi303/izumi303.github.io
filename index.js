document.addEventListener('DOMContentLoaded', () => {
    const heads = document.querySelectorAll('h2');
    if (heads && heads.length) {
        let contents = '';
        heads.forEach((head, i) => {
            let className = '';
            switch (head.localName) {

                case "h2":
                    className = `contents2`;
                    break;

            }
            contents += `<li><a class="${className}" href="#head${i}">${head.textContent}</a></li>`;
            head.innerHTML += `<a id="head${i}"></a>`;
        })
        document.querySelector('#table-of-content').innerHTML += `<ol>${contents}</ol>`;
    }
    //目次作成ここまで
});
