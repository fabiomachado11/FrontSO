"use strict";
//Esta função esperar até que a 'Promise' para continuar a execução.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Cria um objeto, que permite controlar o fluxo de execução. 
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//Define uma propriedade exports para o objeto atual, com valor verdadeiro, serve para obter informações do SO, e colocar em arquivos de texto.
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var child_process = require("child_process");
var fs = require("fs");
var fs_1 = require("fs");
function getProcessInfo(command, filename) {
    var _a;
    //Executa o comando e redireciona a saída para um arquivo
    var writeStream = (0, fs_1.createWriteStream)(filename);
    (_a = (0, child_process_1.exec)(command).stdout) === null || _a === void 0 ? void 0 : _a.pipe(writeStream);
    //Exibe mensagem quando o arquivo estiver pronto
    writeStream.on("finish", function () {
        console.log("Arquivo ".concat(filename, " criado com sucesso!"));
    });
}
//Executa o comando "top", filtra as informações da CPU e retorna uma string
function getCPUInfo() {
    return new Promise(function (resolve, reject) {
        (0, child_process_1.exec)('exec LC_NUMERIC=en_US.UTF-8 & top -b -n 1', function (error, stdout, stderr) {
            if (error) {
                reject("Erro ao executar o comando: ".concat(error));
                return;
            }
            var cpuInfo = stdout
                .split('\n')
                .filter(function (line) { return line.startsWith('%Cpu'); })
                .join('\n');
            resolve(cpuInfo);
        });
    });
}
//Executa o comando "top", filtra as informações das Tarefas e retorna uma string
function getNumP() {
    return new Promise(function (resolve, reject) {
        (0, child_process_1.exec)('top -b -n 1', function (error, stdout, stderr) {
            if (error) {
                reject("Erro ao executar o comando: ".concat(error));
                return;
            }
            var NumP = stdout
                .split('\n')
                .filter(function (line) { return line.startsWith('Tarefas:'); })
                .join('\n');
            resolve(NumP);
        });
    });
}
//Executa o comando "top -H", filtra as informações dos Threads e retorna uma string
function getNumT() {
    return new Promise(function (resolve, reject) {
        (0, child_process_1.exec)('top -H -b -n 1', function (error, stdout, stderr) {
            if (error) {
                reject("Erro ao executar o comando: ".concat(error));
                return;
            }
            var NumT = stdout
                .split('\n')
                .filter(function (line) { return line.startsWith('Threads:'); })
                .join('\n');
            resolve(NumT);
        });
    });
}
//Remove todas as letras e % de uma string
function removeLettersAndPercentages(cpuInfo) {
    return cpuInfo.replace(/[^0-9., ]/g, '');
}
//Escreve a string em um arquivo de texto
function writeStringToFile(filePath, content) {
    return new Promise(function (resolve, reject) {
        fs.writeFile(filePath, content, function (error) {
            if (error) {
                reject("Erro ao escrever no arquivo: ".concat(error));
                return;
            }
            resolve();
        });
    });
}
//lê a memoria do sistema e coloca em um arquivo texto.
function calcularUsoDeMemoria() {
    //Tamanho de página em bytes
    var PAGE_SIZE = 4 * 1024;
    //Cria o arquivo de texto
    var OUTPUT_FILE = 'src/assets/memory.txt';
    //Abre o arquivo de texto
    var output = fs.createWriteStream(OUTPUT_FILE);
    //Le a lista de processos
    var processDirs = fs.readdirSync('/proc').filter(function (dir) { return /^[0-9]+$/.test(dir); });
    for (var _i = 0, processDirs_1 = processDirs; _i < processDirs_1.length; _i++) {
        var processDir = processDirs_1[_i];
        try {
            //Lê informações de uso de memória do processo
            var processStats = fs.readFileSync("/proc/".concat(processDir, "/statm"), 'utf8').trim().split(' ');
            //Calcula o uso de memória para cada segmento de memória
            var memoryStats = {
                totalMemory: Number(processStats[0]) * PAGE_SIZE,
                codeMemory: Number(processStats[1]) * PAGE_SIZE,
                heapMemory: Number(processStats[2]) * PAGE_SIZE,
                stackMemory: Number(processStats[3]) * PAGE_SIZE,
            };
            //Escreve as informações de uso de memória do processo no arquivo de texto
            output.write("Processo ".concat(processDir, ":\n"));
            output.write("  Total de mem\u00F3ria alocada: ".concat(memoryStats.totalMemory, " bytes\n"));
            output.write("  P\u00E1ginas de mem\u00F3ria:\n");
            output.write("    Total: ".concat(memoryStats.totalMemory / PAGE_SIZE, "\n"));
            output.write("    C\u00F3digo: ".concat(memoryStats.codeMemory / PAGE_SIZE, "\n"));
            output.write("    Heap: ".concat(memoryStats.heapMemory / PAGE_SIZE, "\n"));
            output.write("    Stack: ".concat(memoryStats.stackMemory / PAGE_SIZE, "\n\n"));
        }
        catch (err) {
            //Ignorar erros ao ler informações de uso de memória de processos que já finalizaram
            if (err.code !== 'ENOENT') {
                console.error("Erro ao ler informa\u00E7\u00F5es de uso de mem\u00F3ria do processo ".concat(processDir, ":"), err);
            }
        }
    }
    output.end();
}
function obterUsoMemoria() {
// Comando para obter informações de memória
    var comando = 'free -m'; 
    // Arquivo de texto para colocar os resultados
    var arquivoSaida = 'src/assets/uso_memoria.txt'; 
    child_process.exec(comando, function (erro, stdout) {
        if (erro) {
            console.error("Erro ao executar o comando: ".concat(erro.message));
            return;
        }
        var linhas = stdout.trim().split('\n');
        var colunas = linhas[1].replace(/ +/g, ' ').split(' ');
        var memoriaTotal = parseInt(colunas[1], 10);
        var memoriaUsada = parseInt(colunas[2], 10);
        var memoriaLivre = parseInt(colunas[3], 10);
        var percentualUso = ((memoriaUsada / memoriaTotal) * 100).toFixed(2);
        var percentualLivre = ((memoriaLivre / memoriaTotal) * 100).toFixed(2);
        var resultado = " Percentual de Uso da Mem\u00F3ria: ".concat(percentualUso, "%\n Percentual de Mem\u00F3ria Livre: ").concat(percentualLivre, "%\n Quantidade de Mem\u00F3ria F\u00EDsica (RAM): ").concat(memoriaTotal, " MB\n Quantidade de Mem\u00F3ria Virtual: ").concat(memoriaLivre, " MB");
        fs.writeFile(arquivoSaida, resultado, function (erro) {
            if (erro) {
                console.error("Erro ao salvar o arquivo: ".concat(erro.message));
            }
            else {
                console.log("Os dados foram salvos em ".concat(arquivoSaida));
            }
        });
    });
}
//Atualiza as informações da CPU a cada 5 segundos, e chama todas as funções anteriores.
function updateCPUInfo() {
    return __awaiter(this, void 0, void 0, function () {
        var cpuInfo, cpuInfoWithoutLetters, NumP, NumT, command, filename, commandThreads, filenameThreads, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    return [4 , getCPUInfo()];
                case 1:
                    cpuInfo = _a.sent();
                    cpuInfoWithoutLetters = removeLettersAndPercentages(cpuInfo);
                    console.log(cpuInfoWithoutLetters);
                    return [4 , writeStringToFile('src/assets/cpu-info.txt', cpuInfoWithoutLetters)];
                case 2:
                    _a.sent();
                    return [4 , getNumP()];
                case 3:
                    NumP = _a.sent();
                    return [4 , writeStringToFile('src/assets/cpu-NumP.txt', NumP)];
                case 4:
                    _a.sent();
                    return [4 , getNumT()];
                case 5:
                    NumT = _a.sent();
                    return [4 , writeStringToFile('src/assets/cpu-NumT.txt', NumT)]; 
                case 6:
                    _a.sent();
                    command = "ps -eo pid,user,s,pcpu,pmem";
                    filename = "src/assets/processos.txt";
                    getProcessInfo(command, filename);
                    commandThreads = "ps -eLo user,lwp,ppid,nlwp";
                    filenameThreads = "src/assets/Threads.txt";
                    getProcessInfo(commandThreads, filenameThreads);
                    calcularUsoDeMemoria();
                    obterUsoMemoria();
                    return [3 , 8];
                case 7:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 , 8];
                case 8:
                    setTimeout(updateCPUInfo, 5000);
                    return [2 ];
            }
        });
    });
}
//Faz o programa rodar
updateCPUInfo();
