function removeNthFromEnd(head, n){
    if (!head) return null;
    right = head;
    left = head;


 
    for (let i = 0; i < n; i++) {
        if (right === null) return head; // n exceeds the length of the list
        right = right.next;
    }   


    if (right === null) {
        return head.next; // Remove the head node
    }

    while (right.next !== null) { // if we want to find the nth node here condition will be right===null
        right = right.next;
        left = left.next;
    }


    if(left && left.next)
        left.next =  left.next.next;

    return head;

}