import './style.scss'

/**
 * html要素生成
 * @param {string} text TODO内容
 * @return {Object} html要素
 */
const createHtmlElement = (text: string) => {
    // div生成（li生成）
    const div = document.createElement('div');
    div.className = 'list-wrap';

    // pタグ生成(liのテキスト追加)
    const p = document.createElement('p');
    p.innerText = text;

    return { div, p }
}

/**
 * 未完了リストに追加する関数
 * @param {string} text TODO内容
 * @return {void}
 */
const createIncompleteList = (text: string) => {
    // li生成（div生成）
    const li = document.createElement('li');
    li.className = 'list-row'

    const { div, p } = createHtmlElement(text);

    // button(完了)タグ生成
    const completeButton = document.createElement('button')
    completeButton.innerText = '完了';
    completeButton.addEventListener('click', () => {
        // 押された削除ボタンの祖先タグ(li)を未完了リストから削除
        deleteFromIncompleteList(completeButton);
        moveToCompleteList(completeButton)
    })

    // button(削除)タグ生成
    const deleteButton = document.createElement("button")
    deleteButton.innerText = "削除";
    deleteButton.addEventListener('click', () => {
        // 押された削除ボタンの祖先タグ(li)を未完了リストから削除
        deleteFromIncompleteList(deleteButton);
    })

    // divの子要素に各要素を作成し、liに追加
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);

    // 未完了のリストに追加
    document.getElementById('incomplete-list')?.appendChild(li)
}

/** 
 * クリック時にTODOリストを追加する
 * @return {void}
 */
const onClickAdd = () => {
    const addInputElm = document.getElementById('add-text') as HTMLInputElement;
    const inputText = addInputElm.value;
    if (inputText === '') return;

    // テキストボックスの値を取得し、初期化
    addInputElm.value = '';

    createIncompleteList(inputText)
}

/**
 * 未完了リストから指定の要素を削除
 * @param {HTMLButtonElement} target クリックされたbutton要素
 * @returns {void}
 */
const deleteFromIncompleteList = (target: HTMLButtonElement) => {
    const deleteTarget = target.closest('.list-row');
    if (deleteTarget === null) return;
    document.getElementById('incomplete-list')?.removeChild(deleteTarget);
}

/**
 * 未完了リストへ移動させる
 * @param {HTMLButtonElement} target クリックされたbutton要素
 * @returns {void}
 */
const moveToIncompleteList = (target: HTMLButtonElement) => {
    // 押された戻すボタンの親タグ(li)を完了から削除する
    const deleteTarget = target.closest('.list-row');
    if (deleteTarget === null) return;
    document.getElementById('complete-list')?.removeChild(deleteTarget);

    // テキスト取得
    const reverseTarget = target.closest('.list-row');
    const reverseTargetWrap = target.closest('.list-wrap');
    if (reverseTarget === null || reverseTargetWrap === null) return;

    const text = reverseTargetWrap.firstElementChild?.textContent || '';
    createIncompleteList(text)
}

/**
 * 完了リストに追加する関数
 * @param {HTMLButtonElement} target クリックされたbutton要素
 * @return {void}
 */
const moveToCompleteList = (target: HTMLButtonElement) => {
    // 完了リストに追加する要素
    const addTarget = target.closest('.list-row');
    const addTargetWrap = target.closest('.list-wrap');
    if (addTarget === null || addTargetWrap === null) return;

    const text = addTargetWrap.firstElementChild?.textContent || '';

    // li以下を初期化
    addTarget.textContent = null;

    const { div, p } = createHtmlElement(text);

    // button(戻す)タグ生成
    const backButton = document.createElement('button');
    backButton.innerText = '戻す';
    backButton.addEventListener('click', () => {
        moveToIncompleteList(backButton)
    })

    // divタグの子要素に各要素を設定し、liに追加
    div.appendChild(p);
    div.appendChild(backButton);
    addTarget.append(div);

    // 完了リストに追加
    document.getElementById('complete-list')?.appendChild(addTarget);
}

// イベントハンドラ
const eventHandler = () => {
    document.getElementById('add-button')?.addEventListener('click', () => {
        onClickAdd()
    })
}

window.addEventListener('DOMContentLoaded', () => {
    eventHandler();
})