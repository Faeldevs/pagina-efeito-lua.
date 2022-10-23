let estrelas = document.getElementById('estrelas');
            let lua = document.getElementById('lua');
            let montanha-fundo = document.getElementById('montanha-fundo');
            let texto = document.getElementById('texto');
            let botao = document.getElementById('botao');
            let montanha-frente = document.getElementById('montanha-frente');

            window.addEventListener('scroll', function(){
                let value = window.scrollY;
                estrelas.style.left = value * 0.25 + 'px';
                lua.style.top = value * 1.05 + 'px';
            })