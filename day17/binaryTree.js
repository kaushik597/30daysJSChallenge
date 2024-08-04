class TreeNode{
    constructor(value){
        this.value= value;
        this.left= null;
        this.right= null;
    }
}

class BinaryTree{
    constructor(){
        this.root=null;
    
    }

    insertValue(value){
        let node= new TreeNode(value)
        if(this.root===null){
            this.root= node;
        }
        else{
            this.insertNode(this.root, node)
        }
    }

    insertNode(root,node){
        if(node.value<root.value){
            if(root.left==null){
                root.left=node
            
            }
            else{
                this.insertNode(root.left,node)
            }
        }
        else{
            if(root.right==null){
                root.right=node
            }
            else{
                this.insertNode(root.right,node)
            }
        }
    }

    inorderTraversal(node){
        if(node==null){
            return
        }

        this.inorderTraversal(node.left);
        console.log(node.value);
        this.inorderTraversal(node.right)
        
    }

    displayNodes(){
        this.inorderTraversal(this.root)
    }
}


const bt= new BinaryTree();
bt.insertValue(20);
bt.insertValue(10);
bt.insertValue(30);
bt.insertValue(3)
bt.insertValue(15);
bt.displayNodes()
console.log(bt);
