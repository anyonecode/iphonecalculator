        function dis(val) {
            document.getElementById("result").value += val
            return val
        }
        function solve(){
            let x = document.getElementById('result').value
            let y = eval(x);
            document.getElementById('result').value=y
            return y
        }
        function clr(){
            document.getElementById('result').value=''
        }
        function per(){
            let x = document.getElementById('result').value
            let z = (x/100);
            document.getElementById('result').value=z
        }
        function neg(){
            let x = document.getElementById('result').value
            let n = (-x);
            document.getElementById('result').value=n   
        }
