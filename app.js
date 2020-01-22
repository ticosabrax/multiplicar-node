const argv = require('./config/yargs').argv;
//const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const multi = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        multi.listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        multi.crearArchivo(argv.base, argv.limite)
            .then(resp => console.log(`Archivo ${resp} creado.`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('comando no reconocido');
}