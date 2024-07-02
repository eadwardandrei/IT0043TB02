document.addEventListener('DOMContentLoaded', function () {
    const flexContainer = document.getElementById('flexcontainer');
   
    function updateFlexbox(property, value) {
        switch (property) {
            case 'flexdirection':
                flexContainer.style.flexDirection = value;
                break;
            case 'justifycontent':
                flexContainer.style.justifyContent = value;
                break;
            case 'alignitems':
                flexContainer.style.alignItems = value;
                break;
            case 'gap':
                flexContainer.style.gap = `${value}px`;
                break;
            case 'flexgrow':
                if (value === 'reset') {
                    Array.from(flexContainer.children).forEach(item => {
                        item.style.flexGrow = 0;
                    });
                } else if (value === 'growall') {
                    Array.from(flexContainer.children).forEach(item => {
                        item.style.flexGrow = 1;
                    });
                }
                break;
        }
    }
  
    function updateFlexGrow() {
        document.getElementById("box1").style.flexGrow = document.getElementById("flex-grow-1").value;
        document.getElementById("box2").style.flexGrow = document.getElementById("flex-grow-2").value;
        document.getElementById("box3").style.flexGrow = document.getElementById("flex-grow-3").value;
    }

    document.querySelector(".resetflexbox").addEventListener("click", () => {
        flexContainer.style.flexDirection = "row";
        flexContainer.style.justifyContent = "flex-start";
        flexContainer.style.alignItems = "stretch";
        flexContainer.style.gap = "0";
        Array.from(flexContainer.children).forEach(item => {
            item.style.flexGrow = 0; 
        });
        document.getElementById("flex-grow-1").value = "0";
        document.getElementById("flex-grow-2").value = "0";
        document.getElementById("flex-grow-3").value = "0";
        document.getElementById("gap").value = "0";
    });

    document.querySelectorAll('.flexdirection').forEach(button => {
        button.addEventListener('click', function () {
            const value = this.getAttribute('data-value');
            updateFlexbox('flexdirection', value);
        });
    });
   
    document.querySelectorAll('.justifycontent').forEach(button => {
        button.addEventListener('click', function () {
            const value = this.getAttribute('data-value');
            updateFlexbox('justifycontent', value);
        });
    });
 
    document.querySelectorAll('.alignitems').forEach(button => {
        button.addEventListener('click', function () {
            const value = this.getAttribute('data-value');
            updateFlexbox('alignitems', value);
        });
    });
  
    document.getElementById('gap').addEventListener('input', function () {
        const value = this.value;
        updateFlexbox('gap', value);
    });
    
    document.querySelectorAll('.flexgrow').forEach(button => {
        button.addEventListener('click', function () {
            const value = this.id;
            updateFlexbox('flexgrow', value);
        });
    });
   
    function updateItemFlexGrow(itemId, value) {
        const item = document.getElementById(itemId);
        if (item) {
            item.style.flexGrow = value;
        }
    }
    document.getElementById('flex-grow-1').addEventListener('input', function () {
        const value = this.value;
        updateItemFlexGrow('box1', value);
    });
    document.getElementById('flex-grow-2').addEventListener('input', function () {
        const value = this.value;
        updateItemFlexGrow('box2', value);
    });
    document.getElementById('flex-grow-3').addEventListener('input', function () {
        const value = this.value;
        updateItemFlexGrow('box3', value);
    });
 
    updateFlexbox('flexdirection', 'row');
    updateFlexbox('justifycontent', 'flex-start');
    updateFlexbox('alignitems', 'stretch');
    updateFlexbox('gap', 0);
    updateFlexbox('flexgrow', 'reset');
 });
