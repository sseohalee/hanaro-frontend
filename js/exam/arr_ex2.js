class Stack {
    #arr=Array();
    push(a){
        this.#arr.push(a);
    }
    pop(){
        const b=this.#arr.pop();
        return b;
    }
}

const stack = new Stack(); // or new Stack([1,2]); // (1,2)
stack.push(3); // 추가하기
stack.push(4);
console.log(stack.pop());

class Queue {
    #arr=Array();
    enqueue(a){
        this.#arr.push(a);
    }
    dequeue(){
        const b=this.#arr[0];
        return b;
    }
}

const queue = new Queue();
queue.enqueue(3); // 추가하기
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());