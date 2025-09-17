class likeNode{
    constructor(val, next){
        this.val = val;
        this.next = next;
    }
}

var MyLinkedList = function() {
    this._size = 0; // 长度
    this._tail = null; // 尾结点
    this._head = null; // 头结点
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index >= this._size || index < 0) return -1;
    // 创建虚拟头结点
    const dummy = new likeNode(0, this._head);
    // 0 -> head
    let prev = dummy;
    let i = 0;
    while(i <= index){ // 从虚拟头结点开始移动，要多一次，>=
       prev = prev.next; //一直移动至索引节点
       i++;
    }
    return prev.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const currNode = new likeNode(val, this._head);
    this._head = currNode;
    if (!this._tail) {
        this._tail = currNode; // 如果原链表为空，tail 也要指向新节点
    }
    this._size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const currNode = new likeNode(val, null);
    if(this._tail){
        this._tail.next = currNode; // 新增至末尾
        this._tail = currNode; // 重新设置尾结点
    }else{
        this._head = currNode;
        this._tail = currNode;
    }
    this._size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    // 如果 index 等于链表的长度，那么该节点会被追加到链表的末尾
    if(index === this._size){
        this.addAtTail(val);
        // this._size++; //addAtail 内部已经更新长度
        return;
    }
    //如果 index 比长度更大，该节点将 不会插入 到链表中
    if(index > this._size){
        return;
    }
    // 执行查找index的元素，插入节点
    const dummy = new likeNode(0, this._head); //虚拟头节点
    let prev = dummy;
    let i = 0;
    while (i < index) {
        prev = prev.next;
        i++;
    }
    // prev 是 index 的前一个节点
    const newNode = new likeNode(val, prev.next);
    prev.next = newNode;

    this._head = dummy.next; // 更新 head（如果插入到头部）
    this._size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this._size) return;

    const dummy = new likeNode(0, this._head);
    let prev = dummy;
    let i = 0;
    while (i < index) { 
        prev = prev.next;
        i++;
    }
    // prev 是要删除节点的前一个节点
    prev.next = prev.next.next;

    // 更新 head 和 tail
    this._head = dummy.next;
    if (!prev.next) { 
        // 如果 prev.next 为 null，说明删除的是尾节点
        this._tail = prev === dummy ? null : prev;
    }

    this._size--;
};
/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */