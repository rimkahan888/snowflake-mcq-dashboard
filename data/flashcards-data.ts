export interface FlashcardOption {
  label: string
  text: string
  correct: boolean
}

export interface FlashcardData {
  id: number
  question: string
  options: FlashcardOption[]
}

export const flashcardsData: FlashcardData[] = [
  {
    id: 1,
    question:
      "Snowflake provides a mechanism for its customers to override its natural clustering algorithms. This method is:",
    options: [
      { label: "A", text: "Micro-partitions", correct: false },
      { label: "B", text: "Clustering keys", correct: true },
      { label: "C", text: "Key partitions", correct: false },
      { label: "D", text: "Clustered partitions", correct: false },
    ],
  },
  {
    id: 2,
    question: "Which of the following are valid Snowflake Virtual Warehouse Scaling Policies? (Choose two.)",
    options: [
      { label: "A", text: "Custom", correct: false },
      { label: "B", text: "Economy", correct: true },
      { label: "C", text: "Optimized", correct: false },
      { label: "D", text: "Standard", correct: true },
    ],
  },
  {
    id: 3,
    question: "True or False: A single database can exist in more than one Snowflake account.",
    options: [
      { label: "A", text: "True", correct: false },
      { label: "B", text: "False", correct: true },
    ],
  },
  {
    id: 4,
    question: "Which of the following roles is recommended to be used to create and manage users and roles?",
    options: [
      { label: "A", text: "SYSADMIN", correct: false },
      { label: "B", text: "SECURITYADMIN", correct: true },
      { label: "C", text: "PUBLIC", correct: false },
      { label: "D", text: "ACCOUNTADMIN", correct: false },
    ],
  },
  {
    id: 5,
    question: "True or False: Bulk unloading of data from Snowflake supports the use of a SELECT statement.",
    options: [
      { label: "A", text: "True", correct: true },
      { label: "B", text: "False", correct: false },
    ],
  },
  {
    id: 6,
    question: "Select the different types of Internal Stages: (Choose three.)",
    options: [
      { label: "A", text: "Named Stage", correct: true },
      { label: "B", text: "User Stage", correct: true },
      { label: "C", text: "Table Stage", correct: true },
      { label: "D", text: "Schema Stage", correct: false },
    ],
  },
  {
    id: 7,
    question:
      "True or False: A customer using SnowSQL / native connectors will be unable to also use the Snowflake Web Interface (UI) unless access to the UI is explicitly granted by support.",
    options: [
      { label: "A", text: "True", correct: false },
      { label: "B", text: "False", correct: true },
    ],
  },
  {
    id: 8,
    question: "Account-level storage usage can be monitored via:",
    options: [
      { label: "A", text: "The Snowflake Web Interface (UI) in the Databases section", correct: false },
      { label: "B", text: "The Snowflake Web Interface (UI) in the Account -> Billing & Usage section", correct: true },
      { label: "C", text: "The Information Schema -> ACCOUNT_USAGE_HISTORY View", correct: false },
      { label: "D", text: "The Account Usage Schema -> ACCOUNT_USAGE_METRICS View", correct: false },
    ],
  },
  {
    id: 9,
    question: "Credit Consumption by the Compute Layer (Virtual Warehouses) is based on: (Choose two.)",
    options: [
      { label: "A", text: "Number of users", correct: false },
      { label: "B", text: "Warehouse size", correct: true },
      { label: "C", text: "Amount of data processed", correct: false },
      { label: "D", text: "# of clusters for the Warehouse", correct: true },
    ],
  },
  {
    id: 10,
    question: "Which statement best describes clustering?",
    options: [
      {
        label: "A",
        text: "Clustering represents the way data is grouped together and stored within Snowflake's micro-partitions",
        correct: true,
      },
      {
        label: "B",
        text: "The database administrator must define the clustering methodology for each Snowflake table",
        correct: false,
      },
      {
        label: "C",
        text: "The clustering key must be included on the COPY command when loading data into Snowflake",
        correct: false,
      },
      { label: "D", text: "Clustering can be disabled within a Snowflake account", correct: false },
    ],
  },
  {
    id: 11,
    question: "True or False: The COPY command must specify a File Format in order to execute.",
    options: [
      { label: "A", text: "True", correct: false },
      { label: "B", text: "False", correct: true },
    ],
  },
  {
    id: 12,
    question: "Which of the following commands sets the Virtual Warehouse for a session?",
    options: [
      { label: "A", text: "COPY WAREHOUSE FROM <>;", correct: false },
      { label: "B", text: "SET WAREHOUSE = <>;", correct: false },
      { label: "C", text: "USE WAREHOUSE <>;", correct: true },
      { label: "D", text: "USE VIRTUAL_WAREHOUSE <>;", correct: false },
    ],
  },
  {
    id: 13,
    question: "Which of the following objects can be cloned? (Choose four.)",
    options: [
      { label: "A", text: "Tables", correct: true },
      { label: "B", text: "Named File Formats", correct: true },
      { label: "C", text: "Schemas", correct: true },
      { label: "D", text: "Shares", correct: false },
      { label: "E", text: "Databases", correct: true },
      { label: "F", text: "Users", correct: false },
    ],
  },
  {
    id: 14,
    question: "Which object allows you to limit the number of credits consumed within a Snowflake account?",
    options: [
      { label: "A", text: "Account Usage Tracking", correct: false },
      { label: "B", text: "Resource Monitor", correct: true },
      { label: "C", text: "Warehouse Limit Parameter", correct: false },
      { label: "D", text: "Credit Consumption Tracker", correct: false },
    ],
  },
  {
    id: 15,
    question: "Snowflake is designed for which type of workloads? (Choose two.)",
    options: [
      { label: "A", text: "OLAP (Analytics) workloads", correct: true },
      { label: "B", text: "OLTP (Transactional) workloads", correct: false },
      { label: "C", text: "Concurrent workloads", correct: true },
      { label: "D", text: "On-premise workloads", correct: false },
    ],
  },
  {
    id: 16,
    question: "What are the three layers that make up Snowflake's architecture? (Choose three.)",
    options: [
      { label: "A", text: "Compute", correct: true },
      { label: "B", text: "Tri-Secret Secure", correct: false },
      { label: "C", text: "Storage", correct: true },
      { label: "D", text: "Cloud Services", correct: true },
    ],
  },
  {
    id: 17,
    question: "Why would a customer size a Virtual Warehouse from an X-Small to a Medium?",
    options: [
      { label: "A", text: "To accommodate more queries", correct: false },
      { label: "B", text: "To accommodate more users", correct: false },
      { label: "C", text: "To accommodate fluctuations in workload", correct: false },
      { label: "D", text: "To accommodate a more complex workload", correct: true },
    ],
  },
  {
    id: 18,
    question:
      "True or False: Reader Accounts incur no additional Compute costs to the Data Provider since they are simply reading the shared data without making changes.",
    options: [
      { label: "A", text: "True", correct: true },
      { label: "B", text: "False", correct: false },
    ],
  },
  {
    id: 19,
    question:
      "Which of the following connectors allow Multi-Factor Authentication (MFA) authorization when connecting? (Choose all that apply.)",
    options: [
      { label: "A", text: "JDBC", correct: true },
      { label: "B", text: "SnowSQL", correct: true },
      { label: "C", text: "Snowflake Web Interface (UI)", correct: true },
      { label: "D", text: "ODBC", correct: true },
      { label: "E", text: "Python", correct: true },
    ],
  },
  {
    id: 20,
    question: "True or False: Snowflake charges a premium for storing semi-structured data.",
    options: [
      { label: "A", text: "True", correct: false },
      { label: "B", text: "False", correct: true },
    ],
  },
  {
    id: 21,
    question:
      "Which of the following statements describes a benefit of Snowflake's separation of compute and storage? (Choose all that apply.)",
    options: [
      { label: "A", text: "Growth of storage and compute are tightly coupled together", correct: false },
      { label: "B", text: "Storage expands without the requirement to add more compute", correct: true },
      {
        label: "C",
        text: "Compute can be scaled up or down without the requirement to add more storage",
        correct: true,
      },
      { label: "D", text: "Multiple compute clusters can access stored data without contention", correct: true },
    ],
  },
  {
    id: 22,
    question:
      "True or False: It is possible to unload structured data to semi-structured formats such as JSON and Parquet.",
    options: [
      { label: "A", text: "True", correct: true },
      { label: "B", text: "False", correct: false },
    ],
  },
  {
    id: 23,
    question: "In which layer of its architecture does Snowflake store its metadata statistics?",
    options: [
      { label: "A", text: "Storage Layer", correct: false },
      { label: "B", text: "Compute Layer", correct: false },
      { label: "C", text: "Database Layer", correct: false },
      { label: "D", text: "Cloud Services Layer", correct: true },
    ],
  },
  {
    id: 24,
    question: "True or False: Data in fail-safe can be deleted by a user or the Snowflake team before it expires.",
    options: [
      { label: "A", text: "True", correct: false },
      { label: "B", text: "False", correct: true },
    ],
  },
  {
    id: 25,
    question:
      "True or False: Snowflake's data warehouse was built from the ground up for the cloud in lieu of using an existing database or a platform, like Hadoop, as a base.",
    options: [
      { label: "A", text: "True", correct: true },
      { label: "B", text: "False", correct: false },
    ],
  },
  {
    id: 26,
    question: "Which of the following statements are true of Virtual Warehouses? (Choose all that apply.)",
    options: [
      { label: "A", text: "Customers can change the size of the Warehouse after creation", correct: true },
      { label: "B", text: "A Warehouse can be resized while running", correct: true },
      { label: "C", text: "A Warehouse can be configured to suspend after a period of inactivity", correct: true },
      {
        label: "D",
        text: "A Warehouse can be configured to auto-resume when new queries are submitted",
        correct: true,
      },
    ],
  },
  {
    id: 27,
    question: "The PUT command: (Choose two.)",
    options: [
      { label: "A", text: "Automatically creates a File Format object", correct: false },
      { label: "B", text: "Automatically uses the last Stage created", correct: false },
      { label: "C", text: "Automatically compresses files using Gzip", correct: true },
      { label: "D", text: "Automatically encrypts files", correct: true },
    ],
  },
  {
    id: 28,
    question: "Which type of table corresponds to a single Snowflake session?",
    options: [
      { label: "A", text: "Temporary", correct: true },
      { label: "B", text: "Transient", correct: false },
      { label: "C", text: "Provisional", correct: false },
      { label: "D", text: "Permanent", correct: false },
    ],
  },
  {
    id: 29,
    question: "Which interfaces can be used to create and/or manage Virtual Warehouses?",
    options: [
      { label: "A", text: "The Snowflake Web Interface (UI)", correct: false },
      { label: "B", text: "SQL commands", correct: false },
      { label: "C", text: "Data integration tools", correct: false },
      { label: "D", text: "All of the above", correct: true },
    ],
  },
  {
    id: 30,
    question: "When a Pipe is recreated using the CREATE OR REPLACE PIPE command:",
    options: [
      { label: "A", text: "The Pipe load history is reset to empty", correct: false },
      { label: "B", text: "The REFRESH parameter is set to TRUE", correct: false },
      { label: "C", text: "Previously loaded files will be ignored", correct: false },
      { label: "D", text: "All of the above", correct: true },
    ],
  },
  {
    id: 31,
    question:
      "What is the minimum Snowflake edition that customers planning on storing protected information in Snowflake should consider for regulatory compliance?",
    options: [
      { label: "A", text: "Standard", correct: false },
      { label: "B", text: "Premier", correct: false },
      { label: "C", text: "Enterprise", correct: false },
      { label: "D", text: "Business Critical Edition", correct: true },
    ],
  },
  {
    id: 32,
    question: "Select the three types of tables that exist within Snowflake. (Choose three.)",
    options: [
      { label: "A", text: "Temporary", correct: true },
      { label: "B", text: "Transient", correct: true },
      { label: "C", text: "Provisional", correct: false },
      { label: "D", text: "Permanent", correct: true },
    ],
  },
  {
    id: 33,
    question: "True or False: Snowpipe via REST API can only reference External Stages as source.",
    options: [
      { label: "A", text: "True", correct: false },
      { label: "B", text: "False", correct: true },
    ],
  },
  {
    id: 34,
    question:
      "True or False: A third-party tool that supports standard JDBC or ODBC but has no Snowflake-specific driver will be unable to connect to Snowflake.",
    options: [
      { label: "A", text: "True", correct: false },
      { label: "B", text: "False", correct: true },
    ],
  },
  {
    id: 35,
    question: "True or False: It is possible to load data into Snowflake without creating a named File Format object.",
    options: [
      { label: "A", text: "True", correct: true },
      { label: "B", text: "False", correct: false },
    ],
  },
  {
    id: 36,
    question:
      "True or False: A table in Snowflake can only be queried using the Virtual Warehouse that was used to load the data.",
    options: [
      { label: "A", text: "True", correct: false },
      { label: "B", text: "False", correct: true },
    ],
  },
  {
    id: 37,
    question: "Which of the following statements are true of Snowflake data loading? (Choose three.)",
    options: [
      { label: "A", text: "VARIANT null values are not the same as SQL NULL values", correct: true },
      { label: "B", text: "It is recommended to do frequent, single row DMLs", correct: false },
      {
        label: "C",
        text: "It is recommended to validate the data before loading into the Snowflake target table",
        correct: true,
      },
      { label: "D", text: "It is recommended to use staging tables to manage MERGE statements", correct: true },
    ],
  },
  {
    id: 38,
    question: "Which statements are true of micro-partitions? (Choose two.)",
    options: [
      { label: "A", text: "They are approximately 16MB in size", correct: true },
      { label: "B", text: "They are stored compressed only if COMPRESS=TRUE on Table", correct: false },
      { label: "C", text: "They are immutable", correct: true },
      { label: "D", text: "They are only encrypted in the Enterprise edition and above", correct: false },
    ],
  },
  {
    id: 39,
    question:
      "True or False: Query IDs are unique across all Snowflake deployments and can be used in communication with Snowflake Support to help troubleshoot issues.",
    options: [
      { label: "A", text: "True", correct: true },
      { label: "B", text: "False", correct: false },
    ],
  },
  {
    id: 40,
    question:
      "A deterministic query is run at 8am, takes 5 minutes, and the results are cached. Which of the following statements are true? (Choose two.)",
    options: [
      {
        label: "A",
        text: "The exact query will ALWAYS return the precomputed result set for the RESULT_CACHE_ACTIVE = time period",
        correct: false,
      },
      {
        label: "B",
        text: "The same exact query will return the precomputed results if the underlying data hasn't changed and the results were last accessed within previous 24-hour period",
        correct: true,
      },
      {
        label: "C",
        text: "The same exact query will return the precomputed results even if the underlying data has changed as long as the results were last accessed within the previous 24-hour period",
        correct: false,
      },
      {
        label: "D",
        text: "The 24-hour timer on the precomputed results gets renewed every time the exact query is executed",
        correct: true,
      },
    ],
  },
  {
    id: 41,
    question: "Increasing the maximum number of clusters in a Multi-Cluster Warehouse is an example of:",
    options: [
      { label: "A", text: "Scaling rhythmically", correct: false },
      { label: "B", text: "Scaling max", correct: false },
      { label: "C", text: "Scaling out", correct: true },
      { label: "D", text: "Scaling up", correct: false },
    ],
  },
  {
    id: 42,
    question: "Which statement best describes Snowflake tables?",
    options: [
      { label: "A", text: "Snowflake tables are logical representations of underlying physical data", correct: true },
      {
        label: "B",
        text: "Snowflake tables are the physical instantiation of data loaded into Snowflake",
        correct: false,
      },
      {
        label: "C",
        text: "Snowflake tables require that clustering keys be defined to perform optimally",
        correct: false,
      },
      { label: "D", text: "Snowflake tables are owned by a user", correct: false },
    ],
  },
  {
    id: 43,
    question: "Which item in the Data Warehouse migration process does not apply in Snowflake?",
    options: [
      { label: "A", text: "Migrate Users", correct: false },
      { label: "B", text: "Migrate Schemas", correct: false },
      { label: "C", text: "Migrate Indexes", correct: true },
      { label: "D", text: "Build the Data Pipeline", correct: false },
    ],
  },
  {
    id: 44,
    question:
      "Snowflake provides two mechanisms to reduce data storage costs for short-lived tables. These mechanisms are: (Choose two.)",
    options: [
      { label: "A", text: "Temporary Tables", correct: true },
      { label: "B", text: "Transient Tables", correct: true },
      { label: "C", text: "Provisional Tables", correct: false },
      { label: "D", text: "Permanent Tables", correct: false },
    ],
  },
  {
    id: 45,
    question: "What is the maximum compressed row size in Snowflake?",
    options: [
      { label: "A", text: "8KB", correct: false },
      { label: "B", text: "16MB", correct: true },
      { label: "C", text: "50MB", correct: false },
      { label: "D", text: "4000GB", correct: false },
    ],
  },
  {
    id: 46,
    question:
      "Which of the following are main sections of the top navigation of the Snowflake Web Interface (UI)? (Choose three.)",
    options: [
      { label: "A", text: "Databases", correct: true },
      { label: "B", text: "Tables", correct: false },
      { label: "C", text: "Warehouses", correct: true },
      { label: "D", text: "Worksheets", correct: true },
    ],
  },
  {
    id: 47,
    question: "What is the recommended Snowflake data type to store semi-structured data like JSON?",
    options: [
      { label: "A", text: "VARCHAR", correct: false },
      { label: "B", text: "RAW", correct: false },
      { label: "C", text: "LOB", correct: false },
      { label: "D", text: "VARIANT", correct: true },
    ],
  },
  {
    id: 48,
    question: "Which of the following statements are true of Snowflake releases: (Choose two.)",
    options: [
      { label: "A", text: "They happen approximately weekly", correct: false },
      {
        label: "B",
        text: "They roll up and release approximately monthly, but customers can request early release application",
        correct: false,
      },
      {
        label: "C",
        text: "During a release, new customer requests/queries/connections transparently move over to the newer version",
        correct: true,
      },
      {
        label: "D",
        text: "A customer is assigned a 30-minute window (that can be moved anytime within a week) during which the system will be unavailable and customer is upgraded",
        correct: false,
      },
    ],
  },
  {
    id: 49,
    question: "Which of the following are common use cases for zero-copy cloning? (Choose three.)",
    options: [
      { label: "A", text: "Quick provisioning of Dev and Test/QA environments", correct: true },
      { label: "B", text: "Data backups", correct: true },
      { label: "C", text: "Point in time snapshots", correct: true },
      { label: "D", text: "Performance optimization", correct: false },
    ],
  },
  {
    id: 50,
    question:
      "If a Small Warehouse is made up of 2 servers/cluster, how many servers/cluster make up a Medium Warehouse?",
    options: [
      { label: "A", text: "4", correct: true },
      { label: "B", text: "16", correct: false },
      { label: "C", text: "32", correct: false },
      { label: "D", text: "128", correct: false },
    ],
  },
  {
    id: 51,
    question:
      "True or False: When a data share is established between a Data Provider and a Data Consumer, the Data Consumer can extend that data share to other Data Consumers.",
    options: [
      { label: "A", text: "True", correct: false },
      { label: "B", text: "False", correct: true },
    ],
  },
  {
    id: 52,
    question: "Which is true of Snowflake network policies? A Snowflake network policy: (Choose two.)",
    options: [
      { label: "A", text: "Is available to all Snowflake Editions", correct: false },
      { label: "B", text: "Is only available to customers with Business Critical Edition", correct: true },
      { label: "C", text: "Restricts or enables access to specific IP addresses", correct: true },
      { label: "D", text: "Is activated using an ALTER DATABASE command", correct: false },
    ],
  },
  {
    id: 53,
    question: "True or False: Snowflake charges additional fees to Data Providers for each Share they create.",
    options: [
      { label: "A", text: "True", correct: false },
      { label: "B", text: "False", correct: true },
    ],
  },
  {
    id: 54,
    question:
      "Query results are stored in the Result Cache for how long after they are last accessed, assuming no data changes have occurred?",
    options: [
      { label: "A", text: "1 Hour", correct: false },
      { label: "B", text: "3 Hours", correct: false },
      { label: "C", text: "12 Hours", correct: false },
      { label: "D", text: "24 Hours", correct: true },
    ],
  },
  {
    id: 55,
    question: "A role is created and owns 2 tables. This role is then dropped. Who will now own the two tables?",
    options: [
      { label: "A", text: "The tables are now orphaned", correct: false },
      { label: "B", text: "The user that deleted the role", correct: false },
      { label: "C", text: "SYSADMIN", correct: false },
      { label: "D", text: "The assumed role that dropped the role", correct: true },
    ],
  },
  {
    id: 56,
    question:
      "Which of the following connectors are available in the Downloads section of the Snowflake Web Interface (UI)? (Choose two.)",
    options: [
      { label: "A", text: "SnowSQL", correct: true },
      { label: "B", text: "ODBC", correct: true },
      { label: "C", text: "R", correct: false },
      { label: "D", text: "HIVE", correct: false },
    ],
  },
  {
    id: 57,
    question: "Which of the following DML commands isn't supported by Snowflake?",
    options: [
      { label: "A", text: "UPSERT", correct: true },
      { label: "B", text: "MERGE", correct: false },
      { label: "C", text: "UPDATE", correct: false },
      { label: "D", text: "TRUNCATE TABLE", correct: false },
    ],
  },
  {
    id: 58,
    question: "Which of the following statements is true of zero-copy cloning?",
    options: [
      {
        label: "A",
        text: "Zero-copy clones increase storage costs as cloning the table requires storing its data twice",
        correct: false,
      },
      {
        label: "B",
        text: "All zero-copy clone objects inherit the privileges of their original objects",
        correct: false,
      },
      { label: "C", text: "Zero-copy cloning is licensed as an additional Snowflake feature", correct: false },
      {
        label: "D",
        text: "At the instance/instant a clone is created, all micro-partitions in the original table and the clone are fully shared",
        correct: true,
      },
    ],
  },
  {
    id: 59,
    question:
      "True or False: When a user creates a role, they are initially assigned ownership of the role and they maintain ownership until it is transferred to another user.",
    options: [
      { label: "A", text: "True", correct: false },
      { label: "B", text: "False", correct: true },
    ],
  },
  {
    id: 60,
    question: "The Query History in the Snowflake Web Interface (UI) is kept for approximately:",
    options: [
      { label: "A", text: "60 minutes", correct: false },
      { label: "B", text: "24 hours", correct: false },
      { label: "C", text: "14 days", correct: true },
      { label: "D", text: "30 days", correct: false },
      { label: "E", text: "1 year", correct: false },
    ],
  },
  {
    id: 61,
    question: "To run a Multi-Cluster Warehouse in auto-scale mode, a user would:",
    options: [
      { label: "A", text: "Configure the Maximum Clusters setting to Auto-Scale", correct: false },
      { label: "B", text: "Set the Warehouse type to Auto", correct: false },
      { label: "C", text: "Set the Minimum Clusters and Maximum Clusters settings to the same value", correct: false },
      { label: "D", text: "Set the Minimum Clusters and Maximum Clusters settings to different values", correct: true },
    ],
  },
  {
    id: 62,
    question: "Which of the following terms best describes Snowflake's database architecture?",
    options: [
      { label: "A", text: "Columnar shared nothing", correct: false },
      { label: "B", text: "Shared disk", correct: false },
      { label: "C", text: "Multi-cluster, shared data", correct: true },
      { label: "D", text: "Cloud-native shared memory", correct: false },
    ],
  },
  {
    id: 63,
    question: "Which of the following are options when creating a Virtual Warehouse? (Choose two.)",
    options: [
      { label: "A", text: "Auto-drop", correct: false },
      { label: "B", text: "Auto-resize", correct: false },
      { label: "C", text: "Auto-resume", correct: true },
      { label: "D", text: "Auto-suspend", correct: true },
    ],
  },
  {
    id: 64,
    question: "A Virtual Warehouse's auto-suspend and auto-resume settings apply to:",
    options: [
      { label: "A", text: "The primary cluster in the Virtual Warehouse", correct: false },
      { label: "B", text: "The entire Virtual Warehouse", correct: true },
      { label: "C", text: "The database the Virtual Warehouse resides in", correct: false },
      { label: "D", text: "The queries currently being run by the Virtual Warehouse", correct: false },
    ],
  },
  {
    id: 65,
    question: "Fail-safe is unavailable on which table types? (Choose two.)",
    options: [
      { label: "A", text: "Temporary", correct: true },
      { label: "B", text: "Transient", correct: true },
      { label: "C", text: "Provisional", correct: false },
      { label: "D", text: "Permanent", correct: false },
    ],
  },
  {
    id: 66,
    question: "Which of the following objects is not covered by Time Travel?",
    options: [
      { label: "A", text: "Tables", correct: false },
      { label: "B", text: "Schemas", correct: false },
      { label: "C", text: "Databases", correct: false },
      { label: "D", text: "Stages", correct: true },
    ],
  },
  {
    id: 67,
    question:
      "True or False: Micro-partition metadata enables some operations to be completed without requiring Compute.",
    options: [
      { label: "A", text: "True", correct: true },
      { label: "B", text: "False", correct: false },
    ],
  },
  {
    id: 68,
    question: "Which of the following commands are not blocking operations? (Choose two.)",
    options: [
      { label: "A", text: "UPDATE", correct: false },
      { label: "B", text: "INSERT", correct: false },
      { label: "C", text: "MERGE", correct: false },
      { label: "D", text: "COPY", correct: true },
    ],
  },
  {
    id: 69,
    question: "Which of the following is true of Snowpipe via REST API? (Choose two.)",
    options: [
      { label: "A", text: "You can only use it on Internal Stages", correct: false },
      { label: "B", text: "All COPY INTO options are available during pipe creation", correct: false },
      {
        label: "C",
        text: "Snowflake automatically manages the compute required to execute the Pipe's COPY INTO commands",
        correct: true,
      },
      { label: "D", text: "Snowpipe keeps track of which files it has loaded", correct: true },
    ],
  },
  {
    id: 70,
    question:
      "Snowflake recommends, as a minimum, that all users with the following role(s) should be enrolled in Multi-Factor Authentication (MFA):",
    options: [
      { label: "A", text: "SECURITYADMIN, ACCOUNTADMIN, PUBLIC, SYSADMIN", correct: false },
      { label: "B", text: "SECURITYADMIN, ACCOUNTADMIN, SYSADMIN", correct: false },
      { label: "C", text: "SECURITYADMIN, ACCOUNTADMIN", correct: false },
      { label: "D", text: "ACCOUNTADMIN", correct: true },
    ],
  },
  {
    id: 71,
    question: "When can a Virtual Warehouse start running queries?",
    options: [
      { label: "A", text: "12am-5am", correct: false },
      { label: "B", text: "Only during administrator-defined time slots", correct: false },
      { label: "C", text: "When its provisioning is complete", correct: true },
      { label: "D", text: "After replication", correct: false },
    ],
  },
  {
    id: 72,
    question:
      "True or False: Users are able to see the result sets of queries executed by other users that share their same role.",
    options: [
      { label: "A", text: "True", correct: false },
      { label: "B", text: "False", correct: true },
    ],
  },
  {
    id: 73,
    question: "True or False: The user has to specify which cluster a query will run on in a multi-cluster Warehouse.",
    options: [
      { label: "A", text: "True", correct: false },
      { label: "B", text: "False", correct: true },
    ],
  },
  {
    id: 74,
    question: "True or False: Pipes can be suspended and resumed.",
    options: [
      { label: "A", text: "True", correct: true },
      { label: "B", text: "False", correct: false },
    ],
  },
  {
    id: 75,
    question:
      "Which of the following languages can be used to implement Snowflake User Defined Functions (UDFs)? (Choose two.)",
    options: [
      { label: "A", text: "Java", correct: false },
      { label: "B", text: "JavaScript", correct: true },
      { label: "C", text: "SQL", correct: true },
      { label: "D", text: "Python", correct: false },
    ],
  },
  {
    id: 76,
    question: "When should you consider disabling auto-suspend for a Virtual Warehouse? (Choose two.)",
    options: [
      {
        label: "A",
        text: "When users will be using compute at different times throughout a 24/7 period",
        correct: false,
      },
      { label: "B", text: "When managing a steady workload", correct: true },
      { label: "C", text: "When the compute must be available with no delay or lag time", correct: true },
      {
        label: "D",
        text: "When you do not want to have to manually turn on the Warehouse each time a user needs it",
        correct: false,
      },
    ],
  },
  {
    id: 77,
    question:
      "Which of the following are valid approaches to loading data into a Snowflake table? (Choose all that apply.)",
    options: [
      { label: "A", text: "Bulk copy from an External Stage", correct: true },
      { label: "B", text: "Continuous load using Snowpipe REST API", correct: true },
      { label: "C", text: "The Snowflake Web Interface (UI) data loading wizard", correct: true },
      { label: "D", text: "Bulk copy from an Internal Stage", correct: true },
    ],
  },
  {
    id: 78,
    question: "If auto-suspend is enabled for a Virtual Warehouse, the Warehouse is automatically suspended when:",
    options: [
      { label: "A", text: "All Snowflake sessions using the Warehouse are terminated.", correct: false },
      { label: "B", text: "The last query using the Warehouse completes.", correct: false },
      { label: "C", text: "There are no users logged into Snowflake.", correct: false },
      { label: "D", text: "The Warehouse is inactive for a specified period of time.", correct: true },
    ],
  },
  {
    id: 79,
    question:
      "True or False: Multi-Factor Authentication (MFA) in Snowflake is only supported in conjunction with Single Sign-On (SSO).",
    options: [
      { label: "A", text: "True", correct: false },
      { label: "B", text: "False", correct: true },
    ],
  },
  {
    id: 80,
    question: "The number of queries that a Virtual Warehouse can concurrently process is determined by (Choose two.):",
    options: [
      { label: "A", text: "The complexity of each query", correct: true },
      { label: "B", text: "The CONCURRENT_QUERY_LIMIT parameter set on the Snowflake account", correct: false },
      { label: "C", text: "The size of the data required for each query", correct: true },
      { label: "D", text: "The tool that is executing the query", correct: false },
    ],
  },
]

