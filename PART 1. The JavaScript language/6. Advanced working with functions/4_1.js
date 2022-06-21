function printList(list) {
    copyList = list;
    
    while (copyList) {
        alert(copyList.value);
        copyList = copyList.next;
    }
}