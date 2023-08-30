class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


function MergeLinkList(head1,head4){
    const dummyHead =  new Node(0);
    const current = dummyHead;
    while(head1!==null&&head4!==null){
        if(head1.value<head4.value){
            current.next =head1;
        }
        else{
            current.next = head4;
            head4=  head1.next;
        }
        if(head1!==null){
            current.next =head1;
        } 
        else{
            current.next=head4;
        }
    }
    return dummyHead.next;
}


const head1=new Node(1);
const node2= new Node(2);
const node3 = new Node(3);
head1.next = node2;
node2.next = node3;

const head4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
head4.next = node5;
node5.next = node6;

console.log(MergeLinkList(head1,head4))