function runBankersAlgorithm() { let 
    allocation = 
    parseInput(document.getElementById("allocationInput").value); let max 
    = parseInput(document.getElementById("maxInput").value); let 
    available = 
    parseArray(document.getElementById("availableInput").value); 
    if (!allocation || !max || !available) { alert("Invalid input. 
    Please enter proper matrices."); return; 
     } 
     let safeSequence = bankersAlgorithm(allocation, max, available); if 
    (safeSequence.length > 0) { 
    document.getElementById("output").innerText = "Safe Sequence: " + 
    safeSequence.join(" → "); 
     } else { 
     document.getElementById("output").innerText = "No safe sequence found. 
    Possible deadlock!"; 
     } 
    } 
    function detectDeadlock() { 
    let allocation = 
    parseInput(document.getElementById("allocationInput").value); 
    let available = 
    parseArray(document.getElementById("availableInput").value); 
     if (!allocation || !available) { alert("Invalid input. 
    Please enter proper matrices."); return; 
     } 
    let deadlockExists = deadlockDetection(allocation, available); 
    document.getElementById("output").innerText = deadlockExists ? "Deadlock 
    detected!" : "No deadlock detected."; 
    } 
    function simulateDeadlock() { 
    document.getElementById("allocationInput").value = 
    "0,1,0\n2,0,0\n3,0,2\n2,1,1\n0,0,2"; 
    document.getElementById("maxInput").value = 
    "7,5,3\n3,2,2\n9,0,2\n2,2,2\n4,3,3"; 
    document.getElementById("availableInput").value = "3,3,2"; 
    document.getElementById("output").innerText = "Deadlock scenario loaded. 
    Run detection or Banker's Algorithm."; 
    } 
    function bankersAlgorithm(allocation, max, available) { 
    let numProcesses = allocation.length; let 
    numResources = allocation[0].length; let work = 
    available.slice(); let finish = 
    Array(numProcesses).fill(false); let 
    safeSequence = []; 
     let need = max.map((maxRow, i) => maxRow.map((maxVal, j) => maxVal -
    allocation[i][j])); 
    for (let count = 0; count < numProcesses; count++) { let found = 
    false; for (let i = 0; i < numProcesses; i++) { if (!finish[i] && 
    need[i].every((needVal, j) => needVal <= work[j])) { work = 
    work.map((workVal, j) => workVal + allocation[i][j]); finish[i] = true; 
    safeSequence.push(i); found = true; 
    break; 
     } 
     } 
     if (!found) return []; 
     } 
     return safeSequence; 
    } 
    function deadlockDetection(allocation, available) { 
    let numProcesses = allocation.length; let 
    numResources = allocation[0].length; let work = 
    available.slice(); let finish = 
    Array(numProcesses).fill(false); 
     let canProceed = true; while (canProceed) { canProceed = false; 
    for (let i = 0; i < numProcesses; i++) { if (!finish[i] && 
    allocation[i].every((allocVal, j) => allocVal <= work[j])) { work = 
    work.map((workVal, j) => workVal + allocation[i][j]); finish[i] = true; 
    canProceed = true; 
     } 
     } 
     } 
     return finish.includes(false); 
    } 
    function parseInput(text) { return text.split("\n").map(row => 
    row.split(",").map(Number)); 
    } 
    function parseArray(text) { return 
    text.split(",").map(Number); 
    } 
    