import { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";

const questionBank = {
  dbms: {
    "introduction and fundamentals": [
      {
        question: "What does DBMS stand for?",
        options: [
          "Database Management System",
          "Data Backup Management System",
          "Database Monitoring System",
          "Data Management Service",
        ],
        correctAnswer: 0,
        explanation:
          "DBMS stands for Database Management System. It is software used to create, manage, and organize databases.",
      },
      {
        question: "What is a database?",
        options: [
          "A collection of organized data",
          "Only a programming language",
          "A computer keyboard",
          "A web browser",
        ],
        correctAnswer: 0,
        explanation:
          "A database is an organized collection of data that can be stored, managed, and retrieved efficiently.",
      },
      {
        question: "Which is an example of a DBMS?",
        options: [
          "MySQL",
          "HTML",
          "CSS",
          "JavaScript",
        ],
        correctAnswer: 0,
        explanation:
          "MySQL is a popular relational database management system.",
      },
    ],

    "core concepts": [
      {
        question: "What is a primary key?",
        options: [
          "A field that uniquely identifies a record",
          "A field containing duplicate values",
          "A field used only for display",
          "A temporary variable",
        ],
        correctAnswer: 0,
        explanation:
          "A primary key uniquely identifies each record in a database table.",
      },
      {
        question: "What is a foreign key used for?",
        options: [
          "Creating relationships between tables",
          "Deleting all records",
          "Formatting a table",
          "Increasing duplicate data",
        ],
        correctAnswer: 0,
        explanation:
          "A foreign key connects a column in one table to a key in another table.",
      },
      {
        question: "Which language is commonly used to query relational databases?",
        options: [
          "SQL",
          "HTML",
          "CSS",
          "XML",
        ],
        correctAnswer: 0,
        explanation:
          "SQL, or Structured Query Language, is used to communicate with relational databases.",
      },
    ],

    "important terminology": [
      {
        question: "What is a tuple in a relational database?",
        options: [
          "A row",
          "A database",
          "A column name",
          "A query",
        ],
        correctAnswer: 0,
        explanation:
          "A tuple represents a single row or record in a relational table.",
      },
      {
        question: "What is an attribute?",
        options: [
          "A column",
          "A complete database",
          "A table relationship",
          "A software application",
        ],
        correctAnswer: 0,
        explanation:
          "An attribute represents a column or property of an entity in a relational database.",
      },
      {
        question: "What is a relation in relational databases?",
        options: [
          "A table",
          "A password",
          "A server",
          "A program",
        ],
        correctAnswer: 0,
        explanation:
          "In the relational model, a relation is represented as a table.",
      },
    ],

    "intermediate concepts": [
      {
        question: "What is normalization mainly used for?",
        options: [
          "Reducing data redundancy",
          "Increasing duplicate data",
          "Deleting databases",
          "Increasing file size",
        ],
        correctAnswer: 0,
        explanation:
          "Normalization organizes data to reduce redundancy and improve consistency.",
      },
      {
        question: "Which normal form removes partial dependency?",
        options: [
          "Second Normal Form",
          "First Normal Form",
          "Third Normal Form",
          "Fifth Normal Form",
        ],
        correctAnswer: 0,
        explanation:
          "Second Normal Form removes partial dependencies from a relation.",
      },
      {
        question: "Which normal form addresses transitive dependency?",
        options: [
          "Third Normal Form",
          "First Normal Form",
          "Second Normal Form",
          "Zero Normal Form",
        ],
        correctAnswer: 0,
        explanation:
          "Third Normal Form removes transitive dependencies.",
      },
    ],

    "practical applications": [
      {
        question: "Which SQL command is used to retrieve data?",
        options: [
          "SELECT",
          "DELETE",
          "DROP",
          "CREATE",
        ],
        correctAnswer: 0,
        explanation:
          "SELECT is used to retrieve data from one or more tables.",
      },
      {
        question: "Which command is used to add a new record?",
        options: [
          "INSERT",
          "SELECT",
          "UPDATE",
          "DROP",
        ],
        correctAnswer: 0,
        explanation:
          "INSERT is used to add new records to a table.",
      },
      {
        question: "Which command is used to modify existing records?",
        options: [
          "UPDATE",
          "SELECT",
          "CREATE",
          "INSERT",
        ],
        correctAnswer: 0,
        explanation:
          "UPDATE modifies existing records in a table.",
      },
    ],

    "advanced concepts": [
      {
        question: "What is a transaction in a DBMS?",
        options: [
          "A logical unit of database operations",
          "A database table",
          "A programming language",
          "A user interface",
        ],
        correctAnswer: 0,
        explanation:
          "A transaction is a logical unit of work consisting of one or more database operations.",
      },
      {
        question: "Which property of transactions ensures all operations happen completely or not at all?",
        options: [
          "Atomicity",
          "Isolation",
          "Durability",
          "Consistency",
        ],
        correctAnswer: 0,
        explanation:
          "Atomicity ensures a transaction is treated as one complete unit.",
      },
      {
        question: "What does indexing primarily improve?",
        options: [
          "Data retrieval speed",
          "Screen resolution",
          "Password length",
          "File naming",
        ],
        correctAnswer: 0,
        explanation:
          "Indexes are used to speed up data retrieval operations.",
      },
    ],
  },

  python: {
    "introduction and fundamentals": [
      {
        question: "Which keyword is used to define a function in Python?",
        options: [
          "function",
          "def",
          "define",
          "fun",
        ],
        correctAnswer: 1,
        explanation:
          "Python uses the def keyword to define a function.",
      },
      {
        question: "Which symbol is used for a single-line comment in Python?",
        options: [
          "#",
          "//",
          "/*",
          "--",
        ],
        correctAnswer: 0,
        explanation:
          "Python uses # to begin a single-line comment.",
      },
      {
        question: "Which of these is a Python collection type?",
        options: [
          "List",
          "HTML",
          "CSS",
          "SQL",
        ],
        correctAnswer: 0,
        explanation:
          "List is one of Python's built-in collection types.",
      },
    ],

    "core concepts": [
      {
        question: "Which data type stores key-value pairs in Python?",
        options: [
          "Dictionary",
          "List",
          "Tuple",
          "String",
        ],
        correctAnswer: 0,
        explanation:
          "A dictionary stores information as key-value pairs.",
      },
      {
        question: "Which keyword is used for a condition in Python?",
        options: [
          "if",
          "when",
          "condition",
          "check",
        ],
        correctAnswer: 0,
        explanation:
          "Python uses the if keyword for conditional statements.",
      },
      {
        question: "Which loop is commonly used to iterate over a sequence?",
        options: [
          "for",
          "repeat",
          "iterate",
          "loop",
        ],
        correctAnswer: 0,
        explanation:
          "The for loop is commonly used to iterate through sequences and collections.",
      },
    ],

    "important terminology": [
      {
        question: "What is a variable?",
        options: [
          "A name that refers to a value",
          "A database",
          "A loop",
          "A class only",
        ],
        correctAnswer: 0,
        explanation:
          "A variable is a name used to reference or store a value.",
      },
      {
        question: "What is a function?",
        options: [
          "Reusable block of code",
          "Database table",
          "Operating system",
          "Network protocol",
        ],
        correctAnswer: 0,
        explanation:
          "A function is a reusable block of code designed to perform a task.",
      },
      {
        question: "What is a module in Python?",
        options: [
          "A Python file containing code",
          "A database record",
          "A network device",
          "A hardware component",
        ],
        correctAnswer: 0,
        explanation:
          "A Python module is generally a file containing Python definitions and statements.",
      },
    ],

    "intermediate concepts": [
      {
        question: "What is exception handling used for?",
        options: [
          "Handling runtime errors",
          "Creating hardware",
          "Designing websites",
          "Managing databases",
        ],
        correctAnswer: 0,
        explanation:
          "Exception handling allows a program to respond to runtime errors without crashing unexpectedly.",
      },
      {
        question: "Which keyword is used to handle an exception?",
        options: [
          "except",
          "catch",
          "error",
          "handle",
        ],
        correctAnswer: 0,
        explanation:
          "Python uses except along with try to handle exceptions.",
      },
      {
        question: "What is a list comprehension?",
        options: [
          "A compact way to create lists",
          "A database command",
          "A network protocol",
          "A class constructor",
        ],
        correctAnswer: 0,
        explanation:
          "List comprehensions provide a concise syntax for creating lists.",
      },
    ],

    "practical applications": [
      {
        question: "Which library is commonly used for data analysis in Python?",
        options: [
          "Pandas",
          "React",
          "HTML",
          "CSS",
        ],
        correctAnswer: 0,
        explanation:
          "Pandas is widely used for data manipulation and data analysis.",
      },
      {
        question: "Which library is widely used for numerical computing?",
        options: [
          "NumPy",
          "Django",
          "Flask",
          "Bootstrap",
        ],
        correctAnswer: 0,
        explanation:
          "NumPy provides tools for numerical computing and multidimensional arrays.",
      },
      {
        question: "Which library is commonly used for plotting data?",
        options: [
          "Matplotlib",
          "Express",
          "MongoDB",
          "React Router",
        ],
        correctAnswer: 0,
        explanation:
          "Matplotlib is a popular Python library for creating charts and visualizations.",
      },
    ],

    "advanced concepts": [
      {
        question: "What is object-oriented programming in Python?",
        options: [
          "A programming approach based on objects and classes",
          "A database technique",
          "A networking method",
          "A CSS framework",
        ],
        correctAnswer: 0,
        explanation:
          "Python supports object-oriented programming using classes and objects.",
      },
      {
        question: "What is inheritance?",
        options: [
          "A class acquiring properties and behavior from another class",
          "Deleting an object",
          "Creating a database",
          "Running a loop",
        ],
        correctAnswer: 0,
        explanation:
          "Inheritance allows one class to derive properties and behavior from another class.",
      },
      {
        question: "What is polymorphism?",
        options: [
          "Ability to use a common interface for different implementations",
          "Deleting duplicate files",
          "Creating variables",
          "Sorting a list",
        ],
        correctAnswer: 0,
        explanation:
          "Polymorphism allows different objects or classes to respond to the same interface in different ways.",
      },
    ],
  },

  "data structures": {
    "introduction and fundamentals": [
      {
        question: "What is a data structure?",
        options: [
          "A way to organize and store data",
          "A programming language",
          "A database server",
          "A web framework",
        ],
        correctAnswer: 0,
        explanation:
          "A data structure organizes data so it can be accessed and modified efficiently.",
      },
      {
        question: "Which is a linear data structure?",
        options: [
          "Array",
          "Tree",
          "Graph",
          "Heap",
        ],
        correctAnswer: 0,
        explanation:
          "An array is a linear data structure where elements are arranged sequentially.",
      },
      {
        question: "Which structure stores elements in indexed positions?",
        options: [
          "Array",
          "Graph",
          "Tree",
          "Heap",
        ],
        correctAnswer: 0,
        explanation:
          "Arrays store elements in indexed positions.",
      },
    ],

    "core concepts": [
      {
        question: "Which data structure follows LIFO?",
        options: [
          "Stack",
          "Queue",
          "Array",
          "Graph",
        ],
        correctAnswer: 0,
        explanation:
          "A stack follows Last In, First Out.",
      },
      {
        question: "Which data structure follows FIFO?",
        options: [
          "Queue",
          "Stack",
          "Tree",
          "Heap",
        ],
        correctAnswer: 0,
        explanation:
          "A queue follows First In, First Out.",
      },
      {
        question: "Which structure stores elements using nodes and links?",
        options: [
          "Linked List",
          "Array",
          "String",
          "Hash value",
        ],
        correctAnswer: 0,
        explanation:
          "A linked list stores data in nodes connected through links or references.",
      },
    ],

    "important terminology": [
      {
        question: "What is a node?",
        options: [
          "A basic element containing data in structures like linked lists",
          "A database",
          "A compiler",
          "A programming language",
        ],
        correctAnswer: 0,
        explanation:
          "A node commonly contains data and one or more links to other nodes.",
      },
      {
        question: "What is a stack overflow?",
        options: [
          "When a stack exceeds its available space",
          "When a queue becomes empty",
          "When an array is sorted",
          "When a graph is created",
        ],
        correctAnswer: 0,
        explanation:
          "Stack overflow occurs when more elements are pushed than the stack can hold.",
      },
      {
        question: "What is traversal?",
        options: [
          "Visiting elements of a data structure",
          "Deleting a file",
          "Compiling code",
          "Creating a database",
        ],
        correctAnswer: 0,
        explanation:
          "Traversal means systematically visiting elements of a data structure.",
      },
    ],

    "intermediate concepts": [
      {
        question: "Which data structure is commonly used in BFS?",
        options: [
          "Queue",
          "Stack",
          "Array only",
          "Heap only",
        ],
        correctAnswer: 0,
        explanation:
          "Breadth-First Search uses a queue to process nodes level by level.",
      },
      {
        question: "Which data structure is commonly used in DFS?",
        options: [
          "Stack",
          "Queue",
          "Hash table",
          "Array only",
        ],
        correctAnswer: 0,
        explanation:
          "Depth-First Search commonly uses a stack or recursion.",
      },
      {
        question: "What is the average search complexity of a balanced binary search tree?",
        options: [
          "O(log n)",
          "O(n²)",
          "O(1)",
          "O(n³)",
        ],
        correctAnswer: 0,
        explanation:
          "Searching a balanced binary search tree takes O(log n) on average.",
      },
    ],

    "practical applications": [
      {
        question: "Which data structure is useful for undo operations?",
        options: [
          "Stack",
          "Queue",
          "Graph",
          "Tree",
        ],
        correctAnswer: 0,
        explanation:
          "Undo operations commonly use a stack because the most recent action is undone first.",
      },
      {
        question: "Which structure is useful for scheduling tasks?",
        options: [
          "Queue",
          "Stack",
          "Tree",
          "Graph",
        ],
        correctAnswer: 0,
        explanation:
          "Queues are useful when tasks need to be processed in order.",
      },
      {
        question: "Which structure can represent a social network?",
        options: [
          "Graph",
          "Stack",
          "Queue",
          "Array only",
        ],
        correctAnswer: 0,
        explanation:
          "Graphs are useful for representing relationships between entities such as users in a social network.",
      },
    ],

    "advanced concepts": [
      {
        question: "What is a heap commonly used for?",
        options: [
          "Priority queues",
          "Text formatting",
          "CSS styling",
          "Email sending",
        ],
        correctAnswer: 0,
        explanation:
          "Heaps are commonly used to implement priority queues.",
      },
      {
        question: "What is a hash table mainly designed for?",
        options: [
          "Fast key-based lookup",
          "Sequential printing",
          "Graph traversal",
          "Video rendering",
        ],
        correctAnswer: 0,
        explanation:
          "Hash tables provide efficient key-based insertion and lookup.",
      },
      {
        question: "What is the purpose of a balanced tree?",
        options: [
          "Keep operations efficient by controlling height",
          "Increase duplicate data",
          "Store only strings",
          "Remove all nodes",
        ],
        correctAnswer: 0,
        explanation:
          "Balanced trees keep their height controlled so operations remain efficient.",
      },
    ],
  },

  "operating systems": {
    "introduction and fundamentals": [
      {
        question: "What is the main role of an operating system?",
        options: [
          "Manage computer resources",
          "Only edit documents",
          "Only browse websites",
          "Only write programs",
        ],
        correctAnswer: 0,
        explanation:
          "An operating system manages hardware, software, memory, processes, and other system resources.",
      },
      {
        question: "Which is an example of an operating system?",
        options: [
          "Linux",
          "HTML",
          "SQL",
          "Python",
        ],
        correctAnswer: 0,
        explanation:
          "Linux is an operating system.",
      },
      {
        question: "Which resource is managed by an operating system?",
        options: [
          "Memory",
          "Only keyboard color",
          "Only screen size",
          "Only web pages",
        ],
        correctAnswer: 0,
        explanation:
          "Operating systems manage resources such as CPU, memory, storage, and devices.",
      },
    ],

    "core concepts": [
      {
        question: "What is a process?",
        options: [
          "A program in execution",
          "A file extension",
          "A database",
          "A device driver only",
        ],
        correctAnswer: 0,
        explanation:
          "A process is a program that is currently being executed.",
      },
      {
        question: "Which is a common process state?",
        options: [
          "Ready",
          "Printed",
          "Downloaded",
          "Saved",
        ],
        correctAnswer: 0,
        explanation:
          "Ready is a standard process state.",
      },
      {
        question: "What does CPU scheduling determine?",
        options: [
          "Which process gets CPU time",
          "Which file gets deleted",
          "Which browser opens",
          "Which keyboard is connected",
        ],
        correctAnswer: 0,
        explanation:
          "CPU scheduling decides which ready process should receive CPU time.",
      },
    ],

    "important terminology": [
      {
        question: "What is a thread?",
        options: [
          "A lightweight unit of execution",
          "A database table",
          "A hardware cable",
          "A web page",
        ],
        correctAnswer: 0,
        explanation:
          "A thread is a lightweight unit of execution within a process.",
      },
      {
        question: "What is deadlock?",
        options: [
          "A state where processes wait indefinitely for resources",
          "A running process",
          "A type of memory",
          "A file format",
        ],
        correctAnswer: 0,
        explanation:
          "Deadlock occurs when processes wait indefinitely for resources held by each other.",
      },
      {
        question: "What is virtual memory?",
        options: [
          "A technique that uses storage as an extension of memory",
          "A network protocol",
          "A programming language",
          "A CPU register",
        ],
        correctAnswer: 0,
        explanation:
          "Virtual memory allows storage to be used as an extension of physical memory.",
      },
    ],

    "intermediate concepts": [
      {
        question: "Which algorithm is commonly used for CPU scheduling?",
        options: [
          "Round Robin",
          "Binary Search",
          "Quick Sort",
          "DFS",
        ],
        correctAnswer: 0,
        explanation:
          "Round Robin is a well-known CPU scheduling algorithm.",
      },
      {
        question: "What does paging divide memory into?",
        options: [
          "Fixed-size pages",
          "Only files",
          "Only processes",
          "Network packets",
        ],
        correctAnswer: 0,
        explanation:
          "Paging divides logical memory into fixed-size pages and physical memory into frames.",
      },
      {
        question: "What does context switching do?",
        options: [
          "Switches CPU execution between processes or threads",
          "Deletes memory",
          "Formats a disk",
          "Creates a network",
        ],
        correctAnswer: 0,
        explanation:
          "Context switching saves one execution state and loads another.",
      },
    ],

    "practical applications": [
      {
        question: "Which mechanism helps prevent unauthorized access to resources?",
        options: [
          "Access control",
          "Sorting",
          "Compilation",
          "Indexing",
        ],
        correctAnswer: 0,
        explanation:
          "Access control determines who can access particular resources.",
      },
      {
        question: "Why is multitasking useful?",
        options: [
          "It allows multiple tasks to make progress",
          "It deletes processes",
          "It removes memory",
          "It stops scheduling",
        ],
        correctAnswer: 0,
        explanation:
          "Multitasking allows multiple programs or tasks to make progress through scheduling.",
      },
      {
        question: "Why is memory management important?",
        options: [
          "To allocate and manage memory efficiently",
          "To create websites",
          "To format documents",
          "To design images",
        ],
        correctAnswer: 0,
        explanation:
          "Memory management ensures processes get the memory they need efficiently and safely.",
      },
    ],

    "advanced concepts": [
      {
        question: "What is a semaphore?",
        options: [
          "A synchronization mechanism",
          "A database",
          "A compiler",
          "A network cable",
        ],
        correctAnswer: 0,
        explanation:
          "Semaphores help coordinate access to shared resources among processes or threads.",
      },
      {
        question: "What is a race condition?",
        options: [
          "When output depends on the timing of concurrent operations",
          "A disk failure",
          "A memory partition",
          "A file extension",
        ],
        correctAnswer: 0,
        explanation:
          "A race condition occurs when concurrent operations access shared data and results depend on timing.",
      },
      {
        question: "What is demand paging?",
        options: [
          "Loading pages into memory when needed",
          "Deleting unused files",
          "Sorting pages alphabetically",
          "Sending pages over a network",
        ],
        correctAnswer: 0,
        explanation:
          "Demand paging loads a page into memory only when it is actually needed.",
      },
    ],
  },

  "computer networks": {
    "introduction and fundamentals": [
      {
        question: "What does IP stand for?",
        options: [
          "Internet Protocol",
          "Internal Process",
          "Internet Program",
          "Interface Program",
        ],
        correctAnswer: 0,
        explanation:
          "IP stands for Internet Protocol.",
      },
      {
        question: "What is a computer network?",
        options: [
          "A group of connected devices",
          "A single file",
          "A programming language",
          "A database table",
        ],
        correctAnswer: 0,
        explanation:
          "A computer network connects devices so they can communicate and share resources.",
      },
      {
        question: "Which device commonly connects different networks?",
        options: [
          "Router",
          "Keyboard",
          "Monitor",
          "Printer",
        ],
        correctAnswer: 0,
        explanation:
          "A router forwards packets between different networks.",
      },
    ],

    "core concepts": [
      {
        question: "Which protocol is used to load web pages securely?",
        options: [
          "HTTPS",
          "FTP",
          "SMTP",
          "POP3",
        ],
        correctAnswer: 0,
        explanation:
          "HTTPS provides secure web communication using encryption.",
      },
      {
        question: "What is an IP address used for?",
        options: [
          "Identifying a device on a network",
          "Formatting a document",
          "Compiling code",
          "Storing a database",
        ],
        correctAnswer: 0,
        explanation:
          "An IP address identifies a device or interface for communication on a network.",
      },
      {
        question: "What does DNS do?",
        options: [
          "Translates domain names into IP addresses",
          "Encrypts every file",
          "Stores passwords",
          "Creates hardware",
        ],
        correctAnswer: 0,
        explanation:
          "DNS translates human-readable domain names into IP addresses.",
      },
    ],

    "important terminology": [
      {
        question: "What is latency?",
        options: [
          "Delay in data communication",
          "Data storage size",
          "CPU speed",
          "File format",
        ],
        correctAnswer: 0,
        explanation:
          "Latency is the time delay experienced while data travels between endpoints.",
      },
      {
        question: "What is bandwidth?",
        options: [
          "Data transfer capacity",
          "IP address",
          "Password length",
          "CPU instruction",
        ],
        correctAnswer: 0,
        explanation:
          "Bandwidth represents the amount of data that can be transferred over a connection in a given time.",
      },
      {
        question: "What is a packet?",
        options: [
          "A unit of data transmitted over a network",
          "A programming language",
          "A database row",
          "A CPU register",
        ],
        correctAnswer: 0,
        explanation:
          "Network data is commonly divided into packets for transmission.",
      },
    ],

    "intermediate concepts": [
      {
        question: "What is the purpose of a subnet mask?",
        options: [
          "Identify network and host portions of an IP address",
          "Encrypt passwords",
          "Create web pages",
          "Manage databases",
        ],
        correctAnswer: 0,
        explanation:
          "A subnet mask separates the network portion from the host portion of an IP address.",
      },
      {
        question: "Which transport protocol is connection-oriented?",
        options: [
          "TCP",
          "UDP",
          "IP",
          "DNS",
        ],
        correctAnswer: 0,
        explanation:
          "TCP establishes a connection and provides reliable, ordered delivery.",
      },
      {
        question: "Which protocol is connectionless?",
        options: [
          "UDP",
          "TCP",
          "HTTPS",
          "FTP",
        ],
        correctAnswer: 0,
        explanation:
          "UDP is connectionless and does not establish a connection before transmission.",
      },
    ],

    "practical applications": [
      {
        question: "Which protocol is commonly used to transfer files?",
        options: [
          "FTP",
          "DNS",
          "ARP",
          "ICMP",
        ],
        correctAnswer: 0,
        explanation:
          "FTP is designed for file transfer between systems.",
      },
      {
        question: "Which protocol is commonly used for email sending?",
        options: [
          "SMTP",
          "HTTP",
          "DNS",
          "FTP",
        ],
        correctAnswer: 0,
        explanation:
          "SMTP is commonly used to send email messages.",
      },
      {
        question: "Which device is commonly used to connect devices within a LAN?",
        options: [
          "Switch",
          "Router only",
          "Modem only",
          "Printer",
        ],
        correctAnswer: 0,
        explanation:
          "A switch connects devices within a local area network.",
      },
    ],

    "advanced concepts": [
      {
        question: "What is routing?",
        options: [
          "Determining a path for packets",
          "Creating a database",
          "Formatting a drive",
          "Sorting files",
        ],
        correctAnswer: 0,
        explanation:
          "Routing determines where packets should be forwarded to reach their destination.",
      },
      {
        question: "What is congestion in a network?",
        options: [
          "Too much traffic causing performance problems",
          "A deleted packet",
          "A database error",
          "A CPU failure",
        ],
        correctAnswer: 0,
        explanation:
          "Network congestion occurs when traffic becomes heavy enough to reduce performance.",
      },
      {
        question: "What is encryption used for in network security?",
        options: [
          "Protecting data from unauthorized access",
          "Increasing CPU speed",
          "Creating databases",
          "Reducing file names",
        ],
        correctAnswer: 0,
        explanation:
          "Encryption transforms data so unauthorized users cannot easily read it.",
      },
    ],
  },

  "machine learning": {
    "introduction and fundamentals": [
      {
        question: "What is machine learning?",
        options: [
          "A method where computers learn patterns from data",
          "A database system",
          "A web browser",
          "A hardware component",
        ],
        correctAnswer: 0,
        explanation:
          "Machine learning enables systems to learn patterns from data and make predictions or decisions.",
      },
      {
        question: "What is training data?",
        options: [
          "Data used to learn a model",
          "Only final predictions",
          "A programming language",
          "A database server",
        ],
        correctAnswer: 0,
        explanation:
          "Training data is used by a machine learning model to learn patterns.",
      },
      {
        question: "Which is a machine learning task?",
        options: [
          "Classification",
          "Text formatting",
          "File renaming",
          "Screen recording",
        ],
        correctAnswer: 0,
        explanation:
          "Classification is a common supervised machine learning task.",
      },
    ],

    "core concepts": [
      {
        question: "What is supervised learning?",
        options: [
          "Learning from labeled data",
          "Learning without any data",
          "Only clustering data",
          "Only storing data",
        ],
        correctAnswer: 0,
        explanation:
          "Supervised learning uses labeled examples to learn a relationship between inputs and outputs.",
      },
      {
        question: "What is unsupervised learning?",
        options: [
          "Learning patterns from unlabeled data",
          "Learning only from labels",
          "A database operation",
          "A networking protocol",
        ],
        correctAnswer: 0,
        explanation:
          "Unsupervised learning finds patterns or structures in unlabeled data.",
      },
      {
        question: "What is a feature?",
        options: [
          "An input variable used by a model",
          "A final prediction only",
          "A database server",
          "A programming language",
        ],
        correctAnswer: 0,
        explanation:
          "A feature is an input variable or measurable property used by a machine learning model.",
      },
    ],

    "important terminology": [
      {
        question: "What is a model?",
        options: [
          "A learned mathematical representation",
          "A database table",
          "A network cable",
          "A text document",
        ],
        correctAnswer: 0,
        explanation:
          "A model represents patterns learned from data and can be used for predictions.",
      },
      {
        question: "What is a label?",
        options: [
          "The target output in supervised learning",
          "A network address",
          "A database table",
          "A programming loop",
        ],
        correctAnswer: 0,
        explanation:
          "A label is the target output associated with a training example in supervised learning.",
      },
      {
        question: "What is overfitting?",
        options: [
          "When a model learns training data too closely",
          "When a model has no data",
          "When a database grows",
          "When a network slows",
        ],
        correctAnswer: 0,
        explanation:
          "Overfitting occurs when a model performs very well on training data but poorly on unseen data.",
      },
    ],

    "intermediate concepts": [
      {
        question: "What is a hyperparameter?",
        options: [
          "A setting chosen before or during model training",
          "The final prediction",
          "A database field",
          "A network packet",
        ],
        correctAnswer: 0,
        explanation:
          "Hyperparameters are configuration settings such as learning rate or tree depth that are chosen before or during training.",
      },
      {
        question: "What is cross-validation used for?",
        options: [
          "Evaluating model performance more reliably",
          "Deleting data",
          "Creating a database",
          "Encrypting files",
        ],
        correctAnswer: 0,
        explanation:
          "Cross-validation provides a more reliable estimate of model performance by evaluating it across multiple data splits.",
      },
      {
        question: "What is regularization?",
        options: [
          "A technique used to reduce overfitting",
          "A database query",
          "A networking protocol",
          "A sorting method",
        ],
        correctAnswer: 0,
        explanation:
          "Regularization discourages overly complex models and can reduce overfitting.",
      },
    ],

    "practical applications": [
      {
        question: "Which algorithm is commonly used for classification?",
        options: [
          "Decision Tree",
          "HTML",
          "CSS",
          "FTP",
        ],
        correctAnswer: 0,
        explanation:
          "Decision Trees can be used for classification and regression.",
      },
      {
        question: "Which task is an example of regression?",
        options: [
          "Predicting house price",
          "Predicting spam or not spam",
          "Grouping customers",
          "Sorting files",
        ],
        correctAnswer: 0,
        explanation:
          "Regression predicts continuous numerical values such as house prices.",
      },
      {
        question: "What is a confusion matrix used for?",
        options: [
          "Evaluating classification performance",
          "Creating a database",
          "Compiling code",
          "Managing networks",
        ],
        correctAnswer: 0,
        explanation:
          "A confusion matrix summarizes correct and incorrect predictions for classification models.",
      },
    ],

    "advanced concepts": [
      {
        question: "What is ensemble learning?",
        options: [
          "Combining multiple models",
          "Using only one feature",
          "Removing all training data",
          "Creating a database",
        ],
        correctAnswer: 0,
        explanation:
          "Ensemble learning combines multiple models to improve predictive performance.",
      },
      {
        question: "What does boosting generally do?",
        options: [
          "Builds models sequentially to improve errors",
          "Deletes models",
          "Removes features automatically",
          "Stores data only",
        ],
        correctAnswer: 0,
        explanation:
          "Boosting builds models sequentially, with later models focusing on errors or weaknesses of earlier models.",
      },
      {
        question: "What is XGBoost?",
        options: [
          "A gradient boosting algorithm",
          "A database system",
          "A network protocol",
          "A programming language",
        ],
        correctAnswer: 0,
        explanation:
          "XGBoost is a widely used gradient boosting algorithm for machine learning.",
      },
    ],
  },
};

const fallbackQuestions = [
  {
    question: "What is the main purpose of learning a technical subject?",
    options: [
      "Understanding concepts",
      "Only memorizing answers",
      "Avoiding practice",
      "None of these",
    ],
    correctAnswer: 0,
    explanation:
      "Understanding concepts helps you apply your knowledge to real problems.",
  },
  {
    question:
      "Which approach is most useful for learning a technical subject?",
    options: [
      "Only reading",
      "Practice and understanding",
      "Skipping difficult topics",
      "Memorizing everything",
    ],
    correctAnswer: 1,
    explanation:
      "Practice combined with understanding helps build strong technical knowledge.",
  },
  {
    question: "What helps improve your knowledge the most?",
    options: [
      "Regular practice",
      "Never revising",
      "Avoiding quizzes",
      "Guessing answers",
    ],
    correctAnswer: 0,
    explanation:
      "Regular practice strengthens understanding and helps identify weak areas.",
  },
];

function getQuestions(subject, topic) {
  const subjectKey = subject.trim().toLowerCase();
  const topicKey = topic.trim().toLowerCase();

  const subjectQuestions = questionBank[subjectKey];

  if (subjectQuestions && subjectQuestions[topicKey]) {
    return subjectQuestions[topicKey];
  }

  if (subjectQuestions) {
    const firstAvailableTopic =
      Object.keys(subjectQuestions)[0];

    return subjectQuestions[firstAvailableTopic];
  }

  return fallbackQuestions;
}

function Quiz() {
  const navigate = useNavigate();

  const selectedSubject =
    localStorage.getItem("selectedSubject") ||
    "Computer Science";

  const selectedTopic =
    localStorage.getItem("selectedTopic") ||
    "Fundamentals";

  const questions = getQuestions(
    selectedSubject,
    selectedTopic
  );

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [selectedAnswer, setSelectedAnswer] =
    useState(null);

  const [score, setScore] = useState(0);

  const [userAnswers, setUserAnswers] =
    useState([]);

  const question = questions[currentQuestion];

  const handleNext = () => {
    if (selectedAnswer === null) {
      alert("Please select an answer.");
      return;
    }

    const newScore =
      score +
      (selectedAnswer === question.correctAnswer
        ? 1
        : 0);

    const currentAnswer = {
      question: question.question,
      options: question.options,
      selectedAnswer,
      correctAnswer: question.correctAnswer,
      explanation: question.explanation,
    };

    const updatedAnswers = [
      ...userAnswers,
      currentAnswer,
    ];

    if (
      currentQuestion ===
      questions.length - 1
    ) {
      const quizHistory = JSON.parse(
        localStorage.getItem("quizHistory") || "[]"
      );

      const newResult = {
        subject: selectedSubject,
        topic: selectedTopic,
        score: newScore,
        total: questions.length,
        date: new Date().toLocaleDateString(),
      };

      quizHistory.push(newResult);

      localStorage.setItem(
        "quizHistory",
        JSON.stringify(quizHistory)
      );

      localStorage.setItem(
        "quizScore",
        newScore
      );

      localStorage.setItem(
        "totalQuestions",
        questions.length
      );

      const completedTopics = JSON.parse(
        localStorage.getItem("completedTopics") ||
          "[]"
      );

      const topicAlreadyCompleted =
        completedTopics.some(
          (item) =>
            item.subject === selectedSubject &&
            item.topic === selectedTopic
        );

      if (!topicAlreadyCompleted) {
        completedTopics.push({
          subject: selectedSubject,
          topic: selectedTopic,
        });

        localStorage.setItem(
          "completedTopics",
          JSON.stringify(completedTopics)
        );
      }

      localStorage.setItem(
        "quizReview",
        JSON.stringify(updatedAnswers)
      );

      navigate("/result");
      return;
    }

    setScore(newScore);
    setUserAnswers(updatedAnswers);
    setSelectedAnswer(null);
    setCurrentQuestion(
      currentQuestion + 1
    );
  };

  const progress =
    ((currentQuestion + 1) /
      questions.length) *
    100;

  return (
    <div>
      <Navbar />

      <main className="quiz-page">
        <div className="quiz-header">
          <p className="page-label">
            AI GENERATED QUIZ
          </p>

          <h1>{selectedTopic}</h1>

          <p>
            Subject: {selectedSubject}
          </p>
        </div>

        <div className="quiz-progress">
          <div className="progress-info">
            <span>
              Question {currentQuestion + 1} of{" "}
              {questions.length}
            </span>

            <span>
              {Math.round(progress)}% Complete
            </span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${progress}%`,
              }}
            ></div>
          </div>
        </div>

        <div className="question-card">
          <h2>
            {question.question}
          </h2>

          <div className="quiz-options">
            {question.options.map(
              (option, index) => (
                <button
                  className={`quiz-option ${
                    selectedAnswer === index
                      ? "selected"
                      : ""
                  }`}
                  key={index}
                  onClick={() =>
                    setSelectedAnswer(index)
                  }
                >
                  <span className="option-label">
                    {String.fromCharCode(
                      65 + index
                    )}
                  </span>

                  <span>{option}</span>
                </button>
              )
            )}
          </div>

          <div className="quiz-actions">
            <button
              className="submit-quiz-btn"
              onClick={handleNext}
            >
              {currentQuestion ===
              questions.length - 1
                ? "Submit Quiz"
                : "Next Question"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Quiz;