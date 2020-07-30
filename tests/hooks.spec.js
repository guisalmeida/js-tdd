describe('Hooks', function() {
  //roda uma vez antes do bloco
  before(function(){
    console.log('before');
    // ex: inicia conxão no banco
    // ex: cria conjunto de dados
  });

  //roda uma vez após o bloco
  after(function(){
    console.log('after');
    // ex: finaliza conexão no banco
    // ex: apaga conjunto de dados
  });

  //roda todas vezes antes de cada bloco
  beforeEach(function(){
    console.log('beforeEach')
  });

  //roda todas vezes após de cada bloco
  afterEach(function(){
    console.log('afterEach')
  });

  it('Test1', function() {
    console.log('Test1')
  });

  it('Test2', function() {
    console.log('Test2')
  });
})

/////////////////////
/* ciclo dos hooks */
/////////////////////
//before
//beforeEach
// Test1
// afterEach
// beforeEach
// Test2
// afterEach
// after
