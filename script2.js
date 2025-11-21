const explanations = {
1: {
text: "Memory is the best essential element of a computer. Additionally, memory works with other hardware units to help the system function efficiently.",
image: ""
},
2: {
text: "The performance of a computer mainly depends on memory and CPU. These two components define how fast the system can process tasks.",
image: ""
},
3: {
text: "Memory is internal storage media categorized mainly into two types: Primary Memory and Secondary Memory. Computer systems commonly adopt this two-level storage classification.",
image: ""
},
4: {
text: "Memory is categorized into primary memory and secondary memory, where primary memory is also known as main memory. Main memory serves as the immediate working area for the CPU.",
image: ""
},
5: {
text: "Primary memory is computer memory that a processor accesses first or directly. This direct access makes operations faster.",
image: ""
},
6: {
text: "Primary memory allows a processor to access running execution applications and services that are temporarily stored. This helps the CPU handle real-time processing.",
image: ""
},
7: {
text: "Primary memory is also known as primary storage or main memory. These terms refer to the same internal working memory of a system.",
image: ""
},
8: {
text: "RAM is listed as volatile memory. Volatile memory loses its contents once the power is turned off.",
image: ""
},
9: {
text: "ROM is listed as non-volatile memory. Non-volatile memory keeps its data even without power.",
image: ""
},
10: {
text: "Microprocessor, Cache Memory, and Main Memory (RAM) are described together in the RAM section. These components work in coordination to speed up data access.",
image: ""
},
11: {
text: "RAM is a volatile memory and does not store data permanently. Volatile memory requires continuous power to retain information.",
image: ""
},
12: {
text: "As soon as you shut down the computer the RAM loses all the data. This is the defining property of volatile memory.",
image: ""
},
13: {
text: "When performing tasks, data and instructions from the hard disk are stored in RAM. RAM serves as the temporary workspace for active processes.",
image: ""
},
14: {
text: "RAM is categorized into DRAM, SRAM, and SDRAM. These three types differ in speed, cost, and refresh requirements.",
image: ""
},
15: {
text: "DRAM must be constantly refreshed or it loses its contents and is more economical. DRAM is commonly used in large memory modules.",
image: ""
},
16: {
text: "SRAM is faster and less volatile than DRAM but requires more power and is more expensive. It is often used in cache memory.",
image: ""
},
17: {
text: "SDRAM is a type of DRAM that can run at much higher clock speeds. Its synchronous operation allows improved performance.",
image: ""
},
    18: {
text: "ROM is a non-volatile memory. Non-volatile memory keeps stored information even without power.",
image: ""
},
19: {
text: "ROM does not lose its data or programs written at the time of manufacture. This ensures stable and permanent instruction storage.",
image: ""
},
20: {
text: "ROM contains important data and instructions needed to perform important tasks like the boot process. Boot instructions must be permanently stored.",
image: ""
},
21: {
text: "ROM memory has several models such as PROM, EPROM, and EEPROM. These models differ in how they store and erase data.",
image: ""
},
22: {
text: "PROM maintains large storage media but cannot offer erase features. Data is written once and read many times.",
image: ""
},
23: {
text: "EPROM users can delete data by passing ultraviolet light, and the chip is reprogrammed. UV exposure clears stored information.",
image: ""
},
24: {
text: "EEPROM is similar to EPROM but uses electrical beam to erase data. Electrical erasure improves flexibility.",
image: ""
},
25: {
text: "Register memory is located in the CPU in the form of registers. Registers hold values that the CPU uses rapidly.",
image: ""
},
26: {
text: "Register memory is the smallest and fastest memory in a computer. High speed makes it ideal for immediate operations.",
image: ""
},
27: {
text: "A register temporarily holds frequently used data, instructions, and memory addresses. These values support quick CPU execution.",
image: ""
},
28: {
text: "Cache memory is small but faster than the main memory. It bridges speed differences between RAM and CPU.",
image: ""
},
29: {
text: "Cache holds frequently used data so the CPU does not need to access the primary memory. This improves performance.",
image: ""
},
30: {
text: "Semi-volatile memory has limited non-volatile duration after power is removed but eventually loses data. It balances durability and performance.",
image: ""
},
31: {
text: "Virtual memory is a system where all physical memory is controlled by the operating system. The OS coordinates memory allocation.",
image: ""
},
32: {
text: "In virtual memory, the operating system decides what physical location to place a program’s code and data. This optimizes memory usage.",
image: ""
},
33: {
text: "Protected memory assigns each program its own memory area and prevents access outside that range. This ensures safe execution.",
image: ""
},
34: {
text: "Protected memory enhances reliability and security. Programs cannot corrupt each other’s data.",
image: ""
},
35: {
text: "Secondary memory is non-volatile and stores data permanently even when power is off. This ensures long-term storage.",
image: ""
},
36: {
text: "The CPU cannot directly access secondary memory. Data must be moved to primary memory for use.",
image: ""
},
37: {
text: "Secondary memory data is transferred to primary memory before CPU access. This allows processing.",
image: ""
},
38: {
text: "Hard disk has enormous storage capacity compared to main memory. This makes it suitable for long-term data storage.",
image: ""
},
39: {
text: "Solid state storage stores data electrically in silicon chips called cells. The cells hold electrical charges representing bits.",
image: ""
},
40: {
text: "Optical devices use a laser to scan the surface of a spinning disc. Laser reflection identifies pits and lands.",
image: ""
},
41: {
text: "In optical disks, flat areas are known as lands and hollows as pits. These represent data patterns.",
image: ""
},
42: {
text: "Magnetic devices use magnetic fields to magnetise tiny sections of a metal spinning disk. Magnetised sections represent binary 1 and demagnetised represent 0.",
image: ""
},
43: {
text: "A hard drive contains magnetic disks or platters rotating at 5,400 to 15,000 RPM. High speed allows fast access.",
image: ""
},
44: {
text: "CD-ROM is read-only and has a standard storage capacity of 640MB. It is used for distributing software.",
image: ""
},
45: {
text: "CD-R stands for Write Once, Read Many. Data is written once and cannot be edited.",
image: ""
},
46: {
text: "CD-RW is rewritable multiple times. It allows deleting and rewriting data.",
image: ""
},
47: {
text: "DVD has a significantly larger storage capacity than CD, typically 4.7GB. This allows higher-quality media storage.",
image: ""
},
48: {
text: "WORM describes storage where information, once written, cannot be modified. It ensures data integrity.",
image: ""
},
49: {
text: "A floppy disk is a thin, flexible magnetic disk in a square plastic carrier. It was used widely for file transfer.",
image: ""
},
50: {
text: "Magnetic tape is used to record sound, pictures, or computer data. It stores sequential data.",
image: ""
},
51: {
text: "Flash memory retains data even without a power supply. This makes it useful for portable devices.",
image: ""
},
    
52: {
text: "Primary memory is categorized into which two types?",
options: ["Volatile and non-volatile", "Sequential and direct", "Magnetic and optical", "Internal and external"],
correct: "1",
image: ''
},
53: {
text: "Primary memory is also known as:",
options: ["Internal memory", "External memory", "Virtual memory", "Cache memory"],
correct: "1",
image: ''
},
54: {
text: "Which unit can directly access the data stored in primary memory?",
options: ["Processing unit", "ALU only", "Secondary storage controller", "BIOS only"],
correct: "1",
image: ''
},
55: {
text: "Primary memory holds data or information currently used by the processing unit. What is its usual capacity?",
options: ["16 to 32 GB", "2 to 4 GB", "100 to 200 GB", "1 to 2 TB"],
correct: "1",
image: ''
},
56: {
text: "Primary memory can be accessed using which of the following?",
options: ["Data bus", "Control panel", "I/O controller", "Virtual route"],
correct: "1",
image: ''
},
57: {
text: "Which type of memory is costlier than secondary memory?",
options: ["Primary memory", "Cache memory", "Optical memory", "Virtual memory"],
correct: "1",
image: ''
},
58: {
text: "Secondary memory is always of which type?",
options: ["Non-volatile", "Volatile", "Semi-volatile", "Temporary"],
correct: "1",
image: ''
},
59: {
text: "Secondary memory is also known as:",
options: ["Backup or Additional or Auxiliary memory", "Internal memory", "Temporary memory", "Executable memory"],
correct: "1",
image: ''
},
60: {
text: "Data in secondary memory is accessed by the processor only after:",
options: ["It is copied to primary memory", "A boot cycle", "A direct fetch command", "A DMA reset"],
correct: "1",
image: ''
},
61: {
text: "What is the general storage capacity range of secondary memory?",
options: ["200 GB to terabytes", "16 to 32 GB", "2 to 8 MB", "1 to 2 GB"],
correct: "1",
image: ''
},
62: {
text: "Secondary memory is accessed through which channel?",
options: ["I/O channels", "Data bus", "CPU registers", "Address bus only"],
correct: "1",
image: ''
},
63: {
text: "Which memory type is cheaper compared to primary memory?",
options: ["Secondary memory", "Cache memory", "Register memory", "Virtual memory"],
correct: "1",
image: ''
}


};