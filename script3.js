class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    
    add(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
  
        while (current.next) {
          current = current.next;
        }
  
        current.next = newNode;
      }
  
      this.size++;
    }
  
    
    insertAt(data, index) {
      if (index < 0 || index > this.size) {
        return false;
      }
  
      const newNode = new Node(data);
      let current = this.head;
      let previous;
  
      if (index === 0) {
        newNode.next = current;
        this.head = newNode;
      } else {
        let currentIndex = 0;
  
        while (currentIndex < index) {
          previous = current;
          current = current.next;
          currentIndex++;
        }
  
        newNode.next = current;
        previous.next = newNode;
      }
  
      this.size++;
    }
  
    
    removeFrom(index) {
      if (index < 0 || index >= this.size) {
        return null;
      }
  
      let current = this.head;
      let previous;
  
      if (index === 0) {
        this.head = current.next;
      } else {
        let currentIndex = 0;
  
        while (currentIndex < index) {
          previous = current;
          current = current.next;
          currentIndex++;
        }
  
        previous.next = current.next;
      }
  
      this.size--;
      return current.data;
    }
  
   
    removeElement(data) {
      let current = this.head;
      let previous = null;
  
      while (current !== null) {
        if (current.data === data) {
          if (previous === null) {
            this.head = current.next;
          } else {
            previous.next = current.next;
          }
  
          this.size--;
          return current.data;
        }
  
        previous = current;
        current = current.next;
      }
  
      return null;
    }
  
    
    isEmpty() {
      return this.size === 0;
    }
  
    
    getSize() {
       
      return this.size;
      
    }
  
   
    printList() {
      let current = this.head;
      let str = "";
  
      while (current) {
        str += current.data + " ";
        current = current.next;
      }
  
      console.log(str);
    }
  }
 
  // Exemplo de uso:
  const linkedList = new LinkedList();
  
  
  function Add() {
    linkedList.add(15);
    linkedList.add(20);
    linkedList.add(30);
    linkedList.add(40);
    console.log(linkedList.printList())

  }
  function AddEspec() {
    linkedList.insertAt(15, 3); 
    linkedList.printList();
  }
  function Remove(){
    linkedList.removeFrom(3);
    linkedList.printList();
}
   function Tamanho() {
    console.log(linkedList.getSize())
   }
  function Empty() {
    console.log(linkedList.isEmpty())
    
  }
  


  
 