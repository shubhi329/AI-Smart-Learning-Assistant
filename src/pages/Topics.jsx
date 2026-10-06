import { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";

function Topics() {
  const navigate = useNavigate();

  const selectedSubject =
    localStorage.getItem("selectedSubject") || "DBMS";

  const completedTopics = JSON.parse(
    localStorage.getItem("completedTopics") || "[]"
  );

  const [selectedTopic, setSelectedTopic] = useState("");

  const topicsBySubject = {
    DBMS: [
      "Introduction and Fundamentals",
      "Core Concepts",
      "Important Terminology",
      "Intermediate Concepts",
      "Practical Applications",
      "Advanced Concepts",
    ],

    Python: [
      "Introduction and Fundamentals",
      "Core Concepts",
      "Important Terminology",
      "Intermediate Concepts",
      "Practical Applications",
      "Advanced Concepts",
    ],

    "Data Structures": [
      "Introduction and Fundamentals",
      "Core Concepts",
      "Important Terminology",
      "Intermediate Concepts",
      "Practical Applications",
      "Advanced Concepts",
    ],

    "Operating Systems": [
      "Introduction and Fundamentals",
      "Core Concepts",
      "Important Terminology",
      "Intermediate Concepts",
      "Practical Applications",
      "Advanced Concepts",
    ],

    "Computer Networks": [
      "Introduction and Fundamentals",
      "Core Concepts",
      "Important Terminology",
      "Intermediate Concepts",
      "Practical Applications",
      "Advanced Concepts",
    ],

    "Machine Learning": [
      "Introduction and Fundamentals",
      "Core Concepts",
      "Important Terminology",
      "Intermediate Concepts",
      "Practical Applications",
      "Advanced Concepts",
    ],
  };

  const keyPointsBySubject = {
    DBMS: {
      "Introduction and Fundamentals": [
        "A database is an organized collection of related data.",
        "A DBMS is software used to create, store, retrieve, update, and manage data.",
        "A database system helps reduce unnecessary data duplication.",
        "A DBMS provides controlled access to stored data.",
        "A database schema defines the structure of the database.",
        "Data can be represented using tables, records, and relationships.",
        "Database systems improve data consistency and data availability.",
        "Common DBMS examples include MySQL, PostgreSQL, Oracle, and MongoDB.",
      ],

      "Core Concepts": [
        "A table stores related data using rows and columns.",
        "A row represents one record or instance of data.",
        "A column represents an attribute or property.",
        "A primary key uniquely identifies each record in a table.",
        "A foreign key connects one table with another related table.",
        "SQL is commonly used to communicate with relational databases.",
        "Relationships can exist as one-to-one, one-to-many, or many-to-many.",
        "Constraints help maintain accuracy and integrity of database data.",
      ],

      "Important Terminology": [
        "An entity represents a real-world object or concept.",
        "An attribute describes a property of an entity.",
        "A relationship describes an association between entities.",
        "A primary key provides unique identification for records.",
        "A foreign key references a key from another table.",
        "A constraint is a rule applied to database data.",
        "A query is a request for information from a database.",
        "A transaction is a logical unit of database operations.",
      ],

      "Intermediate Concepts": [
        "Normalization is used to reduce data redundancy.",
        "First Normal Form requires atomic values.",
        "Second Normal Form removes partial dependency.",
        "Third Normal Form removes transitive dependency.",
        "A transaction groups related database operations.",
        "ACID stands for Atomicity, Consistency, Isolation, and Durability.",
        "Indexes can improve the speed of data retrieval.",
        "Views provide virtual representations of stored query results.",
      ],

      "Practical Applications": [
        "SQL SELECT retrieves information from database tables.",
        "WHERE filters records according to conditions.",
        "ORDER BY sorts query results.",
        "GROUP BY groups records for aggregate operations.",
        "JOIN combines information from related tables.",
        "INSERT adds new records to a table.",
        "UPDATE modifies existing records.",
        "DELETE removes records from a table.",
      ],

      "Advanced Concepts": [
        "Concurrency control manages simultaneous database operations.",
        "Locking can prevent conflicting database updates.",
        "Deadlocks can occur when transactions wait for each other.",
        "Query optimization improves the efficiency of SQL execution.",
        "Database recovery helps restore information after failures.",
        "Replication maintains copies of data across systems.",
        "Distributed databases store data across multiple locations.",
        "Database security protects information from unauthorized access.",
      ],
    },

    Python: {
      "Introduction and Fundamentals": [
        "Python is a high-level, general-purpose programming language.",
        "Python syntax is designed to be readable and relatively simple.",
        "Variables can store different types of values.",
        "Python uses indentation to define blocks of code.",
        "Common data types include integers, floats, strings, and booleans.",
        "Python supports conditional statements and loops.",
        "Functions allow developers to create reusable code.",
        "Python is widely used in web development, automation, AI, and data science.",
      ],

      "Core Concepts": [
        "Lists are ordered and mutable collections.",
        "Tuples are ordered but immutable collections.",
        "Sets store unique elements.",
        "Dictionaries store data as key-value pairs.",
        "if, elif, and else are used for conditional execution.",
        "for and while loops are used for repetition.",
        "Functions can accept parameters and return values.",
        "Modules allow reusable code to be imported into programs.",
      ],

      "Important Terminology": [
        "A variable is a name that refers to a value.",
        "A data type defines the kind of value being stored.",
        "An argument is a value passed to a function.",
        "A parameter is a variable defined in a function.",
        "A module is a Python file containing reusable code.",
        "A package is a collection of related Python modules.",
        "An exception represents an error or unusual runtime condition.",
        "An object is an instance of a class.",
      ],

      "Intermediate Concepts": [
        "List comprehensions provide a compact way to create lists.",
        "Functions can have default parameter values.",
        "Lambda expressions create small anonymous functions.",
        "Exception handling commonly uses try and except.",
        "Classes define the structure and behavior of objects.",
        "Inheritance allows one class to reuse another class's features.",
        "File handling allows programs to read and write data.",
        "Modules and packages help organize larger projects.",
      ],

      "Practical Applications": [
        "Python can automate repetitive computer tasks.",
        "Pandas is commonly used for data analysis.",
        "NumPy provides efficient numerical operations.",
        "Matplotlib can be used to visualize data.",
        "Python can process CSV, JSON, and other file formats.",
        "Web frameworks such as Flask and Django use Python.",
        "Python is widely used in machine learning applications.",
        "Python can be used to build scripts and APIs.",
      ],

      "Advanced Concepts": [
        "Decorators can modify the behavior of functions.",
        "Generators produce values lazily using yield.",
        "Iterators allow sequential traversal through data.",
        "Context managers help manage resources safely.",
        "Exception handling can include custom exception classes.",
        "Object-oriented designs can use abstraction and polymorphism.",
        "Asynchronous programming can handle concurrent tasks efficiently.",
        "Virtual environments help isolate project dependencies.",
      ],
    },

    "Data Structures": {
      "Introduction and Fundamentals": [
        "A data structure organizes data for efficient storage and processing.",
        "Arrays store elements in indexed positions.",
        "Linked lists consist of connected nodes.",
        "Stacks follow the Last-In-First-Out principle.",
        "Queues follow the First-In-First-Out principle.",
        "Trees represent hierarchical relationships.",
        "Graphs represent relationships between connected elements.",
        "Choosing an appropriate data structure affects program performance.",
      ],

      "Core Concepts": [
        "An array provides indexed access to stored elements.",
        "A linked list stores data using nodes and links.",
        "A stack supports push and pop operations.",
        "A queue supports enqueue and dequeue operations.",
        "A tree contains nodes arranged hierarchically.",
        "A binary tree can have at most two children per node.",
        "A graph consists of vertices and edges.",
        "A hash table stores key-value relationships for fast lookup.",
      ],

      "Important Terminology": [
        "A node is an individual element in structures such as trees and linked lists.",
        "An edge represents a connection between graph vertices.",
        "A root is the topmost node of a tree.",
        "A leaf is a tree node without children.",
        "Depth describes a node's distance from the root.",
        "Height represents the longest downward path in a tree.",
        "Time complexity describes how execution time changes with input size.",
        "Space complexity describes additional memory requirements.",
      ],

      "Intermediate Concepts": [
        "Binary search works efficiently on sorted data.",
        "Recursion solves a problem using smaller versions of itself.",
        "Tree traversal can use preorder, inorder, or postorder methods.",
        "Breadth-first search explores graph levels.",
        "Depth-first search explores one path before backtracking.",
        "Hashing converts keys into positions for fast access.",
        "Priority queues can be implemented using heaps.",
        "Circular queues efficiently reuse available positions.",
      ],

      "Practical Applications": [
        "Stacks are useful for undo operations and function calls.",
        "Queues are useful in CPU scheduling and buffering.",
        "Hash tables are used in caches and dictionaries.",
        "Trees are used in file systems and search structures.",
        "Graphs are used in maps and social networks.",
        "Heaps are useful for priority scheduling.",
        "Linked lists can support dynamic memory structures.",
        "Searching and sorting algorithms are fundamental data processing tools.",
      ],

      "Advanced Concepts": [
        "Balanced trees help maintain efficient search performance.",
        "AVL trees automatically maintain height balance.",
        "Heaps support efficient priority operations.",
        "Graph algorithms can solve shortest-path problems.",
        "Dijkstra's algorithm finds shortest paths under suitable conditions.",
        "Dynamic programming solves overlapping subproblems efficiently.",
        "Greedy algorithms make locally optimal choices.",
        "Choosing the right structure can significantly reduce computational cost.",
      ],
    },

    "Operating Systems": {
      "Introduction and Fundamentals": [
        "An operating system manages computer hardware and software resources.",
        "It acts as an interface between applications and hardware.",
        "The OS manages processes, memory, files, and devices.",
        "A process is a program currently in execution.",
        "A thread is a smaller unit of execution inside a process.",
        "The operating system controls access to system resources.",
        "System calls allow programs to request OS services.",
        "Examples include Windows, Linux, macOS, Android, and iOS.",
      ],

      "Core Concepts": [
        "CPU scheduling determines which process gets CPU time.",
        "A process can move through states such as ready and running.",
        "Threads allow multiple execution paths within a process.",
        "Memory management controls how RAM is allocated.",
        "Virtual memory uses storage to extend logical memory.",
        "File systems organize data on storage devices.",
        "Device management controls hardware communication.",
        "The OS provides security and access-control mechanisms.",
      ],

      "Important Terminology": [
        "A process is an executing program.",
        "A thread is a unit of execution.",
        "A system call requests a service from the OS.",
        "A scheduler decides which process should execute.",
        "A context switch changes CPU execution from one process to another.",
        "Deadlock occurs when processes wait indefinitely for resources.",
        "A semaphore helps coordinate access to shared resources.",
        "Virtual memory provides a larger logical address space.",
      ],

      "Intermediate Concepts": [
        "FCFS scheduling executes processes in arrival order.",
        "SJF selects the process with the shortest expected execution time.",
        "Round Robin gives processes a fixed time slice.",
        "Priority scheduling selects processes based on priority.",
        "Paging divides logical memory into pages.",
        "Physical memory is divided into frames.",
        "Synchronization controls shared resource access.",
        "Deadlock prevention reduces the possibility of circular waiting.",
      ],

      "Practical Applications": [
        "Operating systems support multitasking.",
        "Process management allows several applications to execute.",
        "File permissions control who can access data.",
        "Memory management improves the use of available RAM.",
        "Device drivers help the OS communicate with hardware.",
        "Scheduling algorithms improve CPU utilization.",
        "Virtual memory supports applications larger than available RAM.",
        "Security mechanisms protect system files and resources.",
      ],

      "Advanced Concepts": [
        "Virtualization allows multiple environments to share hardware.",
        "Distributed systems coordinate work across computers.",
        "Deadlock avoidance can use resource-allocation strategies.",
        "Page replacement algorithms decide which page to remove.",
        "Operating systems may support multiprocessor systems.",
        "Kernel components manage low-level system resources.",
        "Access-control mechanisms protect processes and files.",
        "System monitoring helps identify performance bottlenecks.",
      ],
    },

    "Computer Networks": {
      "Introduction and Fundamentals": [
        "A computer network connects devices so they can exchange data.",
        "Networks can be classified as LAN, MAN, WAN, and other types.",
        "Protocols define rules for communication.",
        "Clients request services from servers.",
        "Packets carry data through a network.",
        "Routers connect different networks.",
        "Switches connect devices within local networks.",
        "The internet is a global interconnected network.",
      ],

      "Core Concepts": [
        "The OSI model contains seven conceptual layers.",
        "TCP/IP is the practical protocol suite used on the internet.",
        "IP addresses identify devices on networks.",
        "MAC addresses identify network interfaces.",
        "Ports identify services or applications.",
        "TCP provides reliable connection-oriented communication.",
        "UDP provides lightweight connectionless communication.",
        "DNS converts domain names into IP addresses.",
      ],

      "Important Terminology": [
        "A packet is a unit of network data.",
        "A router forwards packets between networks.",
        "A switch connects devices inside a local network.",
        "A protocol specifies communication rules.",
        "An IP address identifies a network endpoint.",
        "A subnet divides a larger network into smaller networks.",
        "A port identifies a service endpoint.",
        "DNS resolves domain names to network addresses.",
      ],

      "Intermediate Concepts": [
        "TCP establishes reliable communication using connections.",
        "UDP does not guarantee delivery or ordering.",
        "Subnetting divides address space into smaller networks.",
        "Routing determines paths between networks.",
        "NAT translates private and public addresses.",
        "DHCP can automatically assign IP configuration.",
        "ARP helps map IP addresses to hardware addresses.",
        "HTTP is used for web communication.",
      ],

      "Practical Applications": [
        "HTTPS protects web communication using encryption.",
        "DNS allows users to use domain names instead of IP addresses.",
        "Wi-Fi provides wireless network access.",
        "Routers provide communication between networks.",
        "Firewalls can filter unwanted network traffic.",
        "VPNs provide protected communication over public networks.",
        "Cloud applications depend heavily on networking.",
        "Network monitoring helps detect connectivity problems.",
      ],

      "Advanced Concepts": [
        "Load balancing distributes requests across servers.",
        "Routing protocols help discover network paths.",
        "Network congestion can affect communication performance.",
        "Quality of Service can prioritize certain traffic.",
        "TLS helps secure network communication.",
        "Distributed systems require reliable network communication.",
        "Content delivery networks reduce latency by serving nearby content.",
        "Modern applications often use scalable cloud networking.",
      ],
    },

    "Machine Learning": {
      "Introduction and Fundamentals": [
        "Machine Learning allows systems to learn patterns from data.",
        "Supervised learning uses labeled training data.",
        "Unsupervised learning works with unlabeled data.",
        "Reinforcement learning uses rewards and penalties.",
        "Features are inputs used by a model.",
        "The target is the value the model tries to predict.",
        "Training teaches a model using available examples.",
        "Testing evaluates performance on unseen data.",
      ],

      "Core Concepts": [
        "Regression predicts numerical values.",
        "Classification predicts categories or classes.",
        "Clustering groups similar observations.",
        "Training data is used to learn model parameters.",
        "Validation data helps compare model configurations.",
        "Test data provides a final evaluation.",
        "Feature engineering can improve model performance.",
        "Data quality directly affects machine learning results.",
      ],

      "Important Terminology": [
        "A model represents learned patterns from data.",
        "An algorithm is a method used for learning.",
        "A parameter is learned during model training.",
        "A hyperparameter is selected outside the learning process.",
        "Overfitting occurs when a model performs too specifically on training data.",
        "Underfitting occurs when a model is too simple.",
        "Accuracy measures the proportion of correct predictions.",
        "A loss function measures prediction error during learning.",
      ],

      "Intermediate Concepts": [
        "Linear regression predicts continuous numerical values.",
        "Logistic regression is commonly used for classification.",
        "Decision trees make predictions through a sequence of rules.",
        "Random Forest combines multiple decision trees.",
        "KNN predicts using nearby training examples.",
        "SVM finds useful separating boundaries between classes.",
        "Feature scaling is important for many distance-based methods.",
        "Cross-validation helps estimate model performance.",
      ],

      "Practical Applications": [
        "Recommendation systems suggest relevant products or content.",
        "Classification can detect spam emails.",
        "ML can help identify fraudulent transactions.",
        "Regression can predict prices or future demand.",
        "Computer vision can classify or detect objects in images.",
        "Natural language processing can classify and analyze text.",
        "Customer churn prediction is a common business application.",
        "Machine learning supports forecasting and decision-making.",
      ],

      "Advanced Concepts": [
        "Ensemble learning combines multiple models.",
        "Boosting builds models sequentially to improve weak predictions.",
        "Bagging trains multiple models on varied samples.",
        "Hyperparameter tuning searches for better model configurations.",
        "Feature selection removes less useful variables.",
        "Model evaluation should use appropriate metrics.",
        "Data leakage can produce misleadingly high performance.",
        "Deployment requires monitoring model performance on new data.",
      ],
    },
  };

  const topics =
    topicsBySubject[selectedSubject] ||
    topicsBySubject.DBMS;

  const getKeyPoints = (topic) => {
    return (
      keyPointsBySubject[selectedSubject]?.[topic] || [
        `Understand the core concepts of ${topic}.`,
        `Learn the important terminology related to ${topic}.`,
        `Study the main principles of ${topic}.`,
        `Understand how ${topic} works in practice.`,
        `Review common examples related to ${topic}.`,
        `Connect ${topic} with real-world applications.`,
        `Practice questions based on ${topic}.`,
        `Review the topic before attempting the quiz.`,
      ]
    );
  };

  const isTopicCompleted = (topic) => {
    return completedTopics.some(
      (item) =>
        item.subject === selectedSubject &&
        item.topic === topic
    );
  };

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);

    localStorage.setItem(
      "selectedSubject",
      selectedSubject
    );

    localStorage.setItem(
      "selectedTopic",
      topic
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleStartQuiz = () => {
    if (!selectedTopic) {
      return;
    }

    localStorage.setItem(
      "selectedSubject",
      selectedSubject
    );

    localStorage.setItem(
      "selectedTopic",
      selectedTopic
    );

    navigate("/quiz");
  };

  const completedCount = topics.filter((topic) =>
    isTopicCompleted(topic)
  ).length;

  const progressPercentage = Math.round(
    (completedCount / topics.length) * 100
  );

  return (
    <div>
      <Navbar />

      <main className="dashboard-page">

        <div className="dashboard-header">
          <div>
            <p className="page-label">
              TOPIC LIBRARY
            </p>

            <h1>{selectedSubject}</h1>

            <p>
              Choose a topic, review its key points, and then
              practice your knowledge with a topic-wise quiz.
            </p>
          </div>

          <button
            className="start-learning-btn"
            onClick={() => navigate("/home")}
          >
            Change Subject
          </button>
        </div>

        <div className="dashboard-box">
          <p className="page-label">
            SUBJECT PROGRESS
          </p>

          <h2>
            {completedCount} of {topics.length} topics completed
          </h2>

          <div
            style={{
              width: "100%",
              height: "10px",
              background:
                "var(--border)",
              borderRadius: "10px",
              marginTop: "18px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${progressPercentage}%`,
                height: "100%",
                background:
                  "linear-gradient(90deg, #4f46e5, #06b6d4)",
                borderRadius: "10px",
                transition:
                  "width 0.3s ease",
              }}
            />
          </div>

          <p style={{ marginTop: "12px" }}>
            {progressPercentage}% completed
          </p>
        </div>

        {selectedTopic && (
          <div className="dashboard-box">

            <p className="page-label">
              KEY POINTS
            </p>

            <h2>
              {selectedTopic}
            </h2>

            <p>
              Review these important concepts before starting
              your quiz.
            </p>

            <div className="dashboard-container">

              {getKeyPoints(selectedTopic).map(
                (point, index) => (
                  <div
                    className="dashboard-card"
                    key={`${selectedTopic}-${index}`}
                  >
                    <span>
                      KEY POINT {index + 1}
                    </span>

                    <h3>
                      {point}
                    </h3>
                  </div>
                )
              )}

            </div>

            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                marginTop: "24px",
              }}
            >
              <button
                className="start-learning-btn"
                onClick={handleStartQuiz}
              >
                Start Quiz
              </button>

              <button
                onClick={() =>
                  setSelectedTopic("")
                }
                style={{
                  padding: "11px 18px",
                  borderRadius: "10px",
                  border:
                    "1px solid var(--border)",
                  background:
                    "transparent",
                  color:
                    "var(--text)",
                  cursor: "pointer",
                }}
              >
                Choose Another Topic
              </button>
            </div>

          </div>
        )}

        <div className="progress-section">

          <h2>
            Choose a Topic
          </h2>

          <p>
            Select any topic to view its key points.
          </p>

          <div className="dashboard-container">

            {topics.map((topic, index) => {
              const completed =
                isTopicCompleted(topic);

              const active =
                selectedTopic === topic;

              return (
                <div
                  className="dashboard-card"
                  key={topic}
                  style={{
                    border: active
                      ? "2px solid #4f46e5"
                      : undefined,
                  }}
                >
                  <span>
                    TOPIC {index + 1}
                  </span>

                  <h3>
                    {topic}
                  </h3>

                  <p>
                    {completed
                      ? "Completed topic — review the key points again."
                      : "View the important concepts before starting the quiz."
                    }
                  </p>

                  <button
                    onClick={() =>
                      handleTopicClick(topic)
                    }
                  >
                    {active
                      ? "Key Points Opened"
                      : completed
                        ? "Review Key Points"
                        : "View Key Points"}
                  </button>

                  {completed && (
                    <p
                      style={{
                        marginTop: "10px",
                        color:
                          "#16a34a",
                        fontWeight:
                          "700",
                      }}
                    >
                      ✓ Completed
                    </p>
                  )}
                </div>
              );
            })}

          </div>
        </div>

        <div className="dashboard-box">

          <p className="page-label">
            LEARNING FLOW
          </p>

          <h2>
            Learn → Review → Practice
          </h2>

          <p>
            Select a topic, review its key points, start the
            quiz, and then review your score and explanations.
          </p>

        </div>

      </main>
    </div>
  );
}

export default Topics;