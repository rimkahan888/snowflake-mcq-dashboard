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
  {
    "id": 81,
    "question": "Which of the following statements are true of VALIDATION_MODE in Snowflake? (Choose two.)",
    "options": [
      { "label": "A", "text": "The VALIDATION_MODE option is used when creating an Internal Stage", "correct": false },
      { "label": "B", "text": "VALIDATION_MODE=RETURN_ALL_ERRORS is a parameter of the COPY command", "correct": true },
      { "label": "C", "text": "The VALIDATION_MODE option will validate data to be loaded by the COPY statement while completing the load and will return the rows that could not be loaded without error", "correct": false },
      { "label": "D", "text": "The VALIDATION_MODE option will validate data to be loaded by the COPY statement without completing the load and will return possible errors", "correct": true }
    ]
  },
  {
    "id": 82,
    "question": "What privileges are required to create a task?",
    "options": [
      { "label": "A", "text": "The GLOBAL privilege CREATE TASK is required to create a new task.", "correct": false },
      { "label": "B", "text": "Tasks are created at the Application level and can only be created by the Account Admin role.", "correct": false },
      { "label": "C", "text": "Many Snowflake DDLs are metadata operations only, and CREATE TASK DDL can be executed without virtual warehouse requirement or task-specific grants.", "correct": false },
      { "label": "D", "text": "The role must have access to the target schema and the CREATE TASK privilege on the schema itself.", "correct": true }
    ]
  },
  {
    "id": 83,
    "question": "What are the three things customers want most from their enterprise data warehouse solution? (Choose three.)",
    "options": [
      { "label": "A", "text": "On-premise availability", "correct": false },
      { "label": "B", "text": "Simplicity", "correct": true },
      { "label": "C", "text": "Open source based", "correct": false },
      { "label": "D", "text": "Concurrency", "correct": true },
      { "label": "E", "text": "Performance", "correct": true }
    ]
  },
  {
    "id": 84,
    "question": "True or False: Some queries can be answered through the metadata cache and do not require an active Virtual Warehouse.",
    "options": [
      { "label": "A", "text": "True", "correct": true },
      { "label": "B", "text": "False", "correct": false }
    ]
  },
  {
    "id": 85,
    "question": "When scaling out by adding clusters to a multi-cluster warehouse, you are primarily scaling for improved:",
    "options": [
      { "label": "A", "text": "Concurrency", "correct": true },
      { "label": "B", "text": "Performance", "correct": false }
    ]
  },
  {
    "id": 86,
    "question": "What is the minimum Snowflake edition that provides data sharing?",
    "options": [
      { "label": "A", "text": "Standard", "correct": true },
      { "label": "B", "text": "Premier", "correct": false },
      { "label": "C", "text": "Enterprise", "correct": false },
      { "label": "D", "text": "Business Critical Edition", "correct": false }
    ]
  },
  {
    "id": 87,
    "question": "True or False: Each worksheet in the Snowflake Web Interface (UI) can be associated with different roles, databases, schemas, and Virtual Warehouses.",
    "options": [
      { "label": "A", "text": "True", "correct": true },
      { "label": "B", "text": "False", "correct": false }
    ]
  },
  {
    "id": 88,
    "question": "True or False: You can query the files in an External Stage directly without having to load the data into a table.",
    "options": [
      { "label": "A", "text": "True", "correct": true },
      { "label": "B", "text": "False", "correct": false }
    ]
  },
  {
    "id": 89,
    "question": "The FLATTEN function is used to query which type of data in Snowflake?",
    "options": [
      { "label": "A", "text": "Structured data", "correct": false },
      { "label": "B", "text": "Semi-structured data", "correct": true },
      { "label": "C", "text": "Both of the above", "correct": false },
      { "label": "D", "text": "None of the above", "correct": false }
    ]
  },
  {
    "id": 90,
    "question": "True or False: An active warehouse is required to run a COPY INTO statement.",
    "options": [
      { "label": "A", "text": "True", "correct": true },
      { "label": "B", "text": "False", "correct": false }
    ]
  },
  {
    "id": 91,
    "question": "True or False: AWS Private Link provides a secure connection from the Customer's on-premise data center to Snowflake.",
    "options": [
      { "label": "A", "text": "True", "correct": false },
      { "label": "B", "text": "False", "correct": true }
    ]
  },
  {
    "id": 92,
    "question": "True or False: Snowflake's Global Services Layer gathers and maintains statistics on all columns in all micro-partitions.",
    "options": [
      { "label": "A", "text": "True", "correct": true },
      { "label": "B", "text": "False", "correct": false }
    ]
  },
  {
    "id": 93,
    "question": "True or False: It is best practice to define a clustering key on every table.",
    "options": [
      { "label": "A", "text": "True", "correct": false },
      { "label": "B", "text": "False", "correct": true }
    ]
  },
  {
    "id": 94,
    "question": "Which of the following statements is true of Snowflake?",
    "options": [
      { "label": "A", "text": "It was built specifically for the cloud", "correct": true },
      { "label": "B", "text": "It was built as an on-premises solution and then ported to the cloud", "correct": false },
      { "label": "C", "text": "It was designed as a hybrid database to allow customers to store data either on-premises or in the cloud", "correct": false },
      { "label": "D", "text": "It was built for Hadoop architecture", "correct": false },
      { "label": "E", "text": "It's based on an Oracle Architecture", "correct": false }
    ]
  },
  {
    "id": 95,
    "question": "What is the minimum Snowflake edition that provides multi-cluster warehouses and up to 90 days of Time Travel?",
    "options": [
      { "label": "A", "text": "Standard", "correct": false },
      { "label": "B", "text": "Premier", "correct": false },
      { "label": "C", "text": "Enterprise", "correct": true },
      { "label": "D", "text": "Business Critical Edition", "correct": false }
    ]
  },
  {
    "id": 96,
    "question": "How many shares can be consumed by a single Data Consumer?",
    "options": [
      { "label": "A", "text": "1", "correct": false },
      { "label": "B", "text": "10", "correct": false },
      { "label": "C", "text": "100, but can be increased by contacting support", "correct": false },
      { "label": "D", "text": "Unlimited", "correct": true }
    ]
  },
  {
    "id": 97,
    "question": "What is the lowest Snowflake edition that offers Time Travel up to 90 days?",
    "options": [
      { "label": "A", "text": "Standard Edition", "correct": false },
      { "label": "B", "text": "Premier Edition", "correct": false },
      { "label": "C", "text": "Enterprise Edition", "correct": true },
      { "label": "D", "text": "Business Critical Edition", "correct": false }
    ]
  },
  {
    "id": 98,
    "question": "Which of the following statements are true about Schemas in Snowflake? (Choose two.)",
    "options": [
      { "label": "A", "text": "A Schema may contain one or more Databases", "correct": false },
      { "label": "B", "text": "A Database may contain one or more Schemas", "correct": true },
      { "label": "C", "text": "A Schema is a logical grouping of Database Objects", "correct": true },
      { "label": "D", "text": "Each Schema is contained within a Warehouse", "correct": false }
    ]
  },
  {
    "id": 99,
    "question": "True or False: You can resize a Virtual Warehouse while queries are running.",
    "options": [
      { "label": "A", "text": "True", "correct": true },
      { "label": "B", "text": "False", "correct": false }
    ]
  },
  {
    "id": 100,
    "question": "What is the most granular object that the Time Travel retention period can be defined on?",
    "options": [
      { "label": "A", "text": "Account", "correct": false },
      { "label": "B", "text": "Database", "correct": false },
      { "label": "C", "text": "Schema", "correct": false },
      { "label": "D", "text": "Table", "correct": true }
    ]
  },
  {
    "id": 101,
    "question": "Which of the following statements is true of Snowflake micro-partitioning?",
    "options": [
      { "label": "A", "text": "Micro-partitioning has been known to introduce data skew", "correct": false },
      { "label": "B", "text": "Micro-partitioning requires a partitioning schema to be defined up front", "correct": false },
      { "label": "C", "text": "Micro-partitioning is transparently completed using the ordering that occurs when the data is inserted/loaded", "correct": true },
      { "label": "D", "text": "Micro-partitioning can be disabled within a Snowflake account", "correct": false }
    ]
  },
  {
    "id": 102,
    "question": "True or False: Snowflake bills for a minimum of five minutes each time a Virtual Warehouse is started.",
    "options": [
      { "label": "A", "text": "True", "correct": false },
      { "label": "B", "text": "False", "correct": true }
    ]
  },
  {
    "id": 103,
    "question": "When scaling up Virtual Warehouses by increasing Virtual Warehouse t-shirt size, you are primarily scaling for improved:",
    "options": [
      { "label": "A", "text": "Concurrency", "correct": false },
      { "label": "B", "text": "Performance", "correct": true }
    ]
  },
  {
    "id": 104,
    "question": "As a best practice, clustering keys should only be defined on tables of which minimum size?",
    "options": [
      { "label": "A", "text": "Multi-Kilobyte (KB) Range", "correct": false },
      { "label": "B", "text": "Multi-Megabyte (MB) Range", "correct": false },
      { "label": "C", "text": "Multi-Gigabyte (GB) Range", "correct": true },
      { "label": "D", "text": "Multi-Terabyte (TB) Range", "correct": false }
    ]
  },
  {
    "id": 105,
    "question": "How are Snowpipe charges calculated?",
    "options": [
      { "label": "A", "text": "Per-second/per Warehouse size", "correct": false },
      { "label": "B", "text": "Per-second/per-core granularity", "correct": false },
      { "label": "C", "text": "Number of Pipes in account", "correct": false },
      { "label": "D", "text": "Total storage bucket size", "correct": true }
    ]
  },
  {
    "id": 106,
    "question": "True or False: A Snowflake account is charged for data stored in both Internal and External Stages.",
    "options": [
      { "label": "A", "text": "True", "correct": false },
      { "label": "B", "text": "False", "correct": true }
    ]
  },
  {
    "id": 107,
    "question": "True or False: When active, a Pipe requires a dedicated Virtual Warehouse to execute.",
    "options": [
      { "label": "A", "text": "True", "correct": false },
      { "label": "B", "text": "False", "correct": true }
    ]
  },
  {
    "id": 108,
    "question": "True or False: Snowflake supports federated authentication in all editions.",
    "options": [
      { "label": "A", "text": "True", "correct": true },
      { "label": "B", "text": "False", "correct": false }
    ]
  },
  {
    "id": 109,
    "question": "True or False: When a new Snowflake object is created, it is automatically owned by the user who created it.",
    "options": [
      { "label": "A", "text": "True", "correct": false },
      { "label": "B", "text": "False", "correct": true }
    ]
  },
  {
    "id": 110,
    "question": "True or False: A Virtual Warehouse consumes Snowflake credits even when inactive.",
    "options": [
      { "label": "A", "text": "True", "correct": false },
      { "label": "B", "text": "False", "correct": true }
    ]
  },
  {
    "id": 111,
    "question": "True or False: During data unloading, only JSON and CSV files can be compressed.",
    "options": [
      { "label": "A", "text": "True", "correct": false },
      { "label": "B", "text": "False", "correct": true }
    ]
  },
  {
    "id": 112,
    "question": "Which of the following are options when creating a Virtual Warehouse? (Choose two.)",
    "options": [
      { "label": "A", "text": "Auto-suspend", "correct": true },
      { "label": "B", "text": "Auto-resume", "correct": true },
      { "label": "C", "text": "Local SSD size", "correct": false },
      { "label": "D", "text": "User count", "correct": false }
    ]
  },
  {
    "id": 113,
    "question": "Which formats are supported for unloading data from Snowflake? (Choose two.)",
    "options": [
      { "label": "A", "text": "Delimited (CSV, TSV, etc.)", "correct": true },
      { "label": "B", "text": "Avro", "correct": false },
      { "label": "C", "text": "JSON", "correct": true },
      { "label": "D", "text": "ORC", "correct": false }
    ]
  },
  {
    "id": 114,
    "question": "True or False: Data Providers can share data with only the Data Consumer.",
    "options": [
      { "label": "A", "text": "True", "correct": false },
      { "label": "B", "text": "False", "correct": true }
    ]
  },
  {
    "id": 115,
    "question": "The fail-safe retention period is how many days?",
    "options": [
      { "label": "A", "text": "1 day", "correct": false },
      { "label": "B", "text": "7 days", "correct": true },
      { "label": "C", "text": "45 days", "correct": false },
      { "label": "D", "text": "90 days", "correct": false }
    ]
  },
  {
    "id": 116,
    "question": "True or False: Once created, a micro-partition will never be changed.",
    "options": [
      { "label": "A", "text": "True", "correct": false },
      { "label": "B", "text": "False", "correct": true }
    ]
  },
  {
    "id": 117,
    "question": "What services does Snowflake automatically provide for customers that they may have been responsible for with their on-premise system? (Choose all that apply.)",
    "options": [
      { "label": "A", "text": "Installing and configuring hardware", "correct": true },
      { "label": "B", "text": "Patching software", "correct": true },
      { "label": "C", "text": "Physical security", "correct": true },
      { "label": "D", "text": "Maintaining metadata and statistics", "correct": true }
    ]
  },
  {
    "id": 118,
    "question": "Which of the following statements would be used to export/unload data from Snowflake?",
    "options": [
      { "label": "A", "text": "COPY INTO @stage", "correct": true },
      { "label": "B", "text": "EXPORT TO @stage", "correct": false },
      { "label": "C", "text": "INSERT INTO @stage", "correct": false },
      { "label": "D", "text": "EXPORT_TO_STAGE(stage => @stage, select => 'select * from t1');", "correct": false }
    ]
  },
  {
    "id": 119,
    "question": "True or False: A 4X-Large Warehouse may, at times, take longer to provision than an X-Small Warehouse.",
    "options": [
      { "label": "A", "text": "True", "correct": true },
      { "label": "B", "text": "False", "correct": false }
    ]
  },
  {
    "id": 120,
    "question": "How would you determine the size of the virtual warehouse used for a task?",
    "options": [
      { "label": "A", "text": "Root task may be executed concurrently (i.e. multiple instances), so leave margins in the execution window", "correct": false },
      { "label": "B", "text": "Querying (SELECT) the size of the stream content would help determine the warehouse size", "correct": false },
      { "label": "C", "text": "If using a stored procedure to execute multiple SQL statements, test run the procedure to size the compute resource first", "correct": true },
      { "label": "D", "text": "Configure the warehouse for automatic concurrency handling using Multi-cluster warehouse (MCW)", "correct": false }
    ]
  },
  {
    "id": 121,
    "question": "The Information Schema and Account Usage Share provide storage information for which of the following objects? (Choose three.)",
    "options": [
      { "label": "A", "text": "Users", "correct": false },
      { "label": "B", "text": "Tables", "correct": true },
      { "label": "C", "text": "Databases", "correct": true },
      { "label": "D", "text": "Internal Stages", "correct": true }
    ]
  },
  {
    "id": 122,
    "question": "What is the default File Format used in the COPY command if one is not specified?",
    "options": [
      { "label": "A", "text": "CSV", "correct": true },
      { "label": "B", "text": "JSON", "correct": false },
      { "label": "C", "text": "Parquet", "correct": false },
      { "label": "D", "text": "XML", "correct": false }
    ]
  },
  {
    "id": 123,
    "question": "True or False: Reader Accounts are able to extract data from shared data objects for use outside of Snowflake.",
    "options": [
      { "label": "A", "text": "True", "correct": true },
      { "label": "B", "text": "False", "correct": false }
    ]
  },
  {
    "id": 124,
    "question": "True or False: You can define multiple columns within a clustering key on a table.",
    "options": [
      { "label": "A", "text": "True", "correct": true },
      { "label": "B", "text": "False", "correct": false }
    ]
  },
  {
    "id": 125,
    "question": "True or False: Snowflake enforces unique, primary key, and foreign key constraints during DML operations.",
    "options": [
      { "label": "A", "text": "True", "correct": false },
      { "label": "B", "text": "False", "correct": true }
    ]
  },
  {
    "id": 126,
    "question": "True or False: Loading data into Snowflake requires that source data files be no larger than 16MB.",
    "options": [
      { "label": "A", "text": "True", "correct": false },
      { "label": "B", "text": "False", "correct": true }
    ]
  },
  {
    "id": 127,
    "question": "True or False: A Virtual Warehouse can be resized while suspended.",
    "options": [
      { "label": "A", "text": "True", "correct": true },
      { "label": "B", "text": "False", "correct": false }
    ]
  },
  {
    "id": 128,
    "question": "True or False: When you create a custom role, it is a best practice to immediately grant that role to ACCOUNTADMIN.",
    "options": [
      { "label": "A", "text": "True", "correct": false },
      { "label": "B", "text": "False", "correct": true }
    ]
  },
  {
    "id": 129,
    "question": "Which of the following accurately represents how a table fits into Snowflake's logical container hierarchy?",
    "options": [
      { "label": "A", "text": "Account -> Schema -> Database -> Table", "correct": false },
      { "label": "B", "text": "Account -> Database -> Schema -> Table", "correct": true },
      { "label": "C", "text": "Database -> Schema -> Table -> Account", "correct": false },
      { "label": "D", "text": "Database -> Table -> Schema -> Account", "correct": false }
    ]
  },
  {
    "id": 130,
    "question": "True or False: All Snowflake table types include fail-safe storage.",
    "options": [
      { "label": "A", "text": "True", "correct": false },
      { "label": "B", "text": "False", "correct": true }
    ]
  },
  {
    "id": 131,
    "question": "What are two ways to create and manage Data Shares in Snowflake? (Choose two.)",
    "options": [
      { "label": "A", "text": "Via the Snowflake Web Interface (UI)", "correct": true },
      { "label": "B", "text": "Via the DATA_SHARE=TRUE parameter", "correct": false },
      { "label": "C", "text": "Via SQL commands", "correct": true },
      { "label": "D", "text": "Via Virtual Warehouses", "correct": false }
    ]
  },
  {
    "id": 132,
    "question": "True or False: Fail-safe can be disabled within a Snowflake account.",
    "options": [
      { "label": "A", "text": "True", "correct": false },
      { "label": "B", "text": "False", "correct": true }
    ]
  },
  {
    "id": 133,
    "question": "True or False: It is possible for a user to run a query against the query result cache without requiring an active Warehouse.",
    "options": [
      { "label": "A", "text": "True", "correct": true },
      { "label": "B", "text": "False", "correct": false }
    ]
  },
  {
    "id": 134,
    "question": "True or False: When Snowflake is configured to use Single Sign-On (SSO), Snowflake receives the usernames and credentials from the SSO service and loads them into the customer's Snowflake account.",
    "options": [
      { "label": "A", "text": "True", "correct": false },
      { "label": "B", "text": "False", "correct": true }
    ]
  },
  {
    "id": 135,
    "question": "Which of the following are best practices for loading data into Snowflake? (Choose three.)",
    "options": [
      { "label": "A", "text": "Aim to produce data files that are between 100 MB and 250 MB in size, compressed", "correct": true },
      { "label": "B", "text": "Load data from files in a cloud storage service in a different region/cloud than your Snowflake account", "correct": false },
      { "label": "C", "text": "Enclose fields that contain delimiter characters in single or double quotes", "correct": true },
      { "label": "D", "text": "Split large files into a greater number of smaller files to distribute the load", "correct": true },
      { "label": "E", "text": "When planning which warehouse(s) to use for data loading, start with the largest warehouse possible", "correct": false },
      { "label": "F", "text": "Partition the staged data into large folders with random paths, letting Snowflake handle loading", "correct": false }
    ]
  },
  {
    "id": 136,
    "question": "What Snowflake feature is used for both querying and restoring data?",
    "options": [
      { "label": "A", "text": "Cluster keys", "correct": false },
      { "label": "B", "text": "Time Travel", "correct": true },
      { "label": "C", "text": "Fail-safe", "correct": false },
      { "label": "D", "text": "Cloning", "correct": false }
    ]
  },
  {
    "id": 137,
    "question": "What do the terms scale up and scale out refer to in Snowflake? (Choose two.)",
    "options": [
      { "label": "A", "text": "Scaling out adds clusters of the same size to a virtual warehouse to handle more concurrent queries", "correct": true },
      { "label": "B", "text": "Scaling out adds clusters of varying sizes to a virtual warehouse", "correct": false },
      { "label": "C", "text": "Scaling out adds additional database servers to an existing running cluster", "correct": false },
      { "label": "D", "text": "Snowflake recommends using both scaling up and scaling out to handle more concurrent queries", "correct": false },
      { "label": "E", "text": "Scaling up resizes a virtual warehouse so it can handle more complex workloads", "correct": true },
      { "label": "F", "text": "Scaling up adds additional database servers to an existing running cluster to handle larger workloads", "correct": false }
    ]
  },
  {
    "id": 138,
    "question": "What is the minimum Snowflake edition that has column-level security enabled?",
    "options": [
      { "label": "A", "text": "Standard", "correct": false },
      { "label": "B", "text": "Enterprise", "correct": true },
      { "label": "C", "text": "Business Critical", "correct": false },
      { "label": "D", "text": "Virtual Private Snowflake", "correct": false }
    ]
  },
  {
    "id": 139,
    "question": "What parameter controls if the Virtual Warehouse starts immediately after the CREATE WAREHOUSE statement?",
    "options": [
      { "label": "A", "text": "INITIALLY_SUSPENDED = TRUE/FALSE", "correct": true },
      { "label": "B", "text": "START_AFTER_CREATE = TRUE/FALSE", "correct": false },
      { "label": "C", "text": "START_THE = 60  // (seconds from now)", "correct": false },
      { "label": "D", "text": "START_TIME = CURRENT_DATE()", "correct": false }
    ]
  },
  {
    "id": 140,
    "question": "When cloning a database, what is cloned with the database? (Choose two.)",
    "options": [
      { "label": "A", "text": "Privileges on the database", "correct": false },
      { "label": "B", "text": "Existing child objects within the database", "correct": true },
      { "label": "C", "text": "Future child objects within the database", "correct": false },
      { "label": "D", "text": "Privileges on the schemas within the database", "correct": false },
      { "label": "E", "text": "Only schemas and tables within the database", "correct": true }
    ]
  },
  {
    "id": 141,
    "question": "Which of the following describes the Snowflake Cloud Services layer?",
    "options": [
      { "label": "A", "text": "Coordinates activities in the Snowflake account", "correct": true },
      { "label": "B", "text": "Executes queries submitted by the Snowflake account users", "correct": false },
      { "label": "C", "text": "Manages quotas on the Snowflake account storage", "correct": false },
      { "label": "D", "text": "Manages the virtual warehouse cache to speed up queries", "correct": false }
    ]
  },
  {
    "id": 142,
    "question": "What is the maximum total Continuous Data Protection (CDP) charges incurred for a temporary table?",
    "options": [
      { "label": "A", "text": "30 days", "correct": false },
      { "label": "B", "text": "7 days", "correct": false },
      { "label": "C", "text": "48 hours", "correct": false },
      { "label": "D", "text": "24 hours", "correct": true }
    ]
  },
  {
    "id": 143,
    "question": "When reviewing a query profile, what is a symptom that a query is too large to fit into the memory?",
    "options": [
      { "label": "A", "text": "A single join node uses more than 50% of the query time", "correct": false },
      { "label": "B", "text": "Partitions scanned is equal to partitions total", "correct": false },
      { "label": "C", "text": "An AggregateOperator node is present", "correct": false },
      { "label": "D", "text": "The query is spilling to remote storage", "correct": true }
    ]
  },
  {
    "id": 144,
    "question": "What type of query benefits the MOST from search optimization?",
    "options": [
      { "label": "A", "text": "A query that uses only disjunction (OR) predicates", "correct": false },
      { "label": "B", "text": "A query that includes analytical expressions", "correct": false },
      { "label": "C", "text": "A query that uses equality predicates or predicates that use IN", "correct": true },
      { "label": "D", "text": "A query that filters on semi-structured data types", "correct": false }
    ]
  },
  {
    "id": 145,
    "question": "What transformations are supported in a CREATE PIPE ... AS COPY FROM (...) statement? (Choose two.)",
    "options": [
      { "label": "A", "text": "Data can be filtered by an optional WHERE clause", "correct": true },
      { "label": "B", "text": "Incoming data can be joined with other tables", "correct": false },
      { "label": "C", "text": "Columns can be reordered", "correct": false },
      { "label": "D", "text": "Columns can be omitted", "correct": true },
      { "label": "E", "text": "Row level access can be defined", "correct": false }
    ]
  },
  {
    "id": 146,
    "question": "Which of the following are characteristics of Snowflake virtual warehouses? (Choose two.)",
    "options": [
      { "label": "A", "text": "Auto-resume applies only to the last warehouse that was started in a multi-cluster warehouse", "correct": false },
      { "label": "B", "text": "The ability to auto-suspend a warehouse is only available in the Enterprise edition or above", "correct": false },
      { "label": "C", "text": "SnowSQL supports both a config file and a command line option for specifying a default warehouse", "correct": true },
      { "label": "D", "text": "A user cannot specify a default warehouse when using the ODBC driver", "correct": false },
      { "label": "E", "text": "The default virtual warehouse size can be changed at any time", "correct": true }
    ]
  },
  {
    "id": 147,
    "question": "Which command should be used to load data from a file, located in an external stage, into a table in Snowflake?",
    "options": [
      { "label": "A", "text": "INSERT", "correct": false },
      { "label": "B", "text": "PUT", "correct": false },
      { "label": "C", "text": "GET", "correct": false },
      { "label": "D", "text": "COPY", "correct": true }
    ]
  },
  {
    "id": 148,
    "question": "The Snowflake Cloud Data Platform is described as having which of the following architectures?",
    "options": [
      { "label": "A", "text": "Shared-disk", "correct": false },
      { "label": "B", "text": "Shared-nothing", "correct": false },
      { "label": "C", "text": "Multi-cluster shared data", "correct": true },
      { "label": "D", "text": "Serverless query engine", "correct": false }
    ]
  },
  {
    "id": 149,
    "question": "Which of the following is a data tokenization integration partner?",
    "options": [
      { "label": "A", "text": "Protegrity", "correct": true },
      { "label": "B", "text": "Tableau", "correct": false },
      { "label": "C", "text": "DBeaver", "correct": false },
      { "label": "D", "text": "SAP", "correct": false }
    ]
  },
  {
    "id": 150,
    "question": "What versions of Snowflake should be used to manage compliance with Personal Identifiable Information (PII) requirements? (Choose two.)",
    "options": [
      { "label": "A", "text": "Custom Edition", "correct": false },
      { "label": "B", "text": "Virtual Private Snowflake", "correct": true },
      { "label": "C", "text": "Business Critical Edition", "correct": true },
      { "label": "D", "text": "Standard Edition", "correct": false },
      { "label": "E", "text": "Enterprise Edition", "correct": false }
    ]
  },
  {
    "id": 151,
    "question": "What are supported file formats for unloading data from Snowflake? (Choose three.)",
    "options": [
      { "label": "A", "text": "XML", "correct": false },
      { "label": "B", "text": "JSON", "correct": true },
      { "label": "C", "text": "Parquet", "correct": true },
      { "label": "D", "text": "ORC", "correct": false },
      { "label": "E", "text": "AVRO", "correct": false },
      { "label": "F", "text": "CSV", "correct": true }
    ]
  },
  {
    "id": 152,
    "question": "The Snowflake cloud services layer is responsible for which tasks? (Choose two.)",
    "options": [
      { "label": "A", "text": "Local disk caching", "correct": false },
      { "label": "B", "text": "Authentication and access control", "correct": true },
      { "label": "C", "text": "Metadata management", "correct": true },
      { "label": "D", "text": "Query processing", "correct": false },
      { "label": "E", "text": "Database storage", "correct": false }
    ]
  },
  {
    "id": 153,
    "question": "What is a key feature of Snowflake architecture?",
    "options": [
      { "label": "A", "text": "Zero-copy cloning creates a mirror copy that updates with the original", "correct": false },
      { "label": "B", "text": "Software updates are automatically applied on a quarterly basis", "correct": false },
      { "label": "C", "text": "Snowflake eliminates resource contention with its virtual warehouse implementation", "correct": true },
      { "label": "D", "text": "Multi-cluster warehouses allow a single query to span multiple clusters", "correct": false },
      { "label": "E", "text": "Snowflake automatically sorts DATE columns during ingest for faster date retrieval", "correct": false }
    ]
  },
  {
    "id": 154,
    "question": "When publishing a Snowflake Data Marketplace listing into a remote region what should be taken into consideration? (Choose two.)",
    "options": [
      { "label": "A", "text": "There is no need to have a Snowflake account in the target region, a share will be created for each user", "correct": false },
      { "label": "B", "text": "The listing is replicated into all selected regions automatically, but the data is not", "correct": true },
      { "label": "C", "text": "The user must have the ORGADMIN role available in at least one account to link accounts for replication", "correct": true },
      { "label": "D", "text": "Shares attached to listings in remote regions can be viewed from any account in an organization", "correct": false },
      { "label": "E", "text": "For a standard listing, wait until the first customer requests the data before replicating it", "correct": false }
    ]
  },
  {
    "id": 155,
    "question": "When loading data into Snowflake via Snowpipe what is the compressed file size recommendation?",
    "options": [
      { "label": "A", "text": "10-50 MB", "correct": false },
      { "label": "B", "text": "100-250 MB", "correct": true },
      { "label": "C", "text": "300-500 MB", "correct": false },
      { "label": "D", "text": "1000-1500 MB", "correct": false }
    ]
  },
  {
    "id": 156,
    "question": "Which Snowflake feature allows a user to substitute a randomly generated identifier for sensitive data before loading it into Snowflake?",
    "options": [
      { "label": "A", "text": "External Tokenization", "correct": true },
      { "label": "B", "text": "External Tables", "correct": false },
      { "label": "C", "text": "Materialized Views", "correct": false },
      { "label": "D", "text": "User-Defined Table Functions (UDTF)", "correct": false }
    ]
  },
  {
    "id": 157,
    "question": "Which of the following are examples of operations that require a Virtual Warehouse to complete, assuming no queries have been executed previously? (Choose three.)",
    "options": [
      { "label": "A", "text": "MIN(<< column value >>)", "correct": true },
      { "label": "B", "text": "COPY", "correct": true },
      { "label": "C", "text": "SUM(<< column value >>)", "correct": true },
      { "label": "D", "text": "UPDATE", "correct": true }
    ]
  },
  {
    "id": 158,
    "question": "What is the SNOWFLAKE.ACCOUNT_USAGE view that contains information about which objects were read by queries within the last 365 days (1 year)?",
    "options": [
      { "label": "A", "text": "VIEWS_HISTORY", "correct": false },
      { "label": "B", "text": "OBJECT_HISTORY", "correct": false },
      { "label": "C", "text": "ACCESS_HISTORY", "correct": true },
      { "label": "D", "text": "LOGIN_HISTORY", "correct": false }
    ]
  },
  {
    "id": 159,
    "question": "Which feature is only available in the Enterprise or higher editions of Snowflake?",
    "options": [
      { "label": "A", "text": "Column-level security", "correct": true },
      { "label": "B", "text": "SOC 2 type II certification", "correct": false },
      { "label": "C", "text": "Multi-factor Authentication (MFA)", "correct": false },
      { "label": "D", "text": "Object-level access control", "correct": false }
    ]
  },
  {
    "id": 160,
    "question": "Will data cached in a warehouse be lost when the warehouse is resized?",
    "options": [
      { "label": "A", "text": "Possibly, if it is resized to a smaller size and the cache no longer fits", "correct": false },
      { "label": "B", "text": "Yes, because the compute resource is replaced entirely with a new one", "correct": true },
      { "label": "C", "text": "No, because the size of the cache is independent of warehouse size", "correct": false },
      { "label": "D", "text": "Yes, because the new compute resource no longer has access to the cache's key", "correct": false }
    ]
  },
  {
    "id": 161,
    "question": "Which semi-structured file formats are supported when unloading data from a table? (Choose two.)",
    "options": [
      { "label": "A", "text": "ORC", "correct": false },
      { "label": "B", "text": "XML", "correct": false },
      { "label": "C", "text": "Avro", "correct": false },
      { "label": "D", "text": "Parquet", "correct": true },
      { "label": "E", "text": "JSON", "correct": true }
    ]
  },
  {
    "id": 162,
    "question": "A running virtual warehouse is suspended. What is the MINIMUM amount of time that the warehouse will incur charges for when it is restarted?",
    "options": [
      { "label": "A", "text": "1 second", "correct": true },
      { "label": "B", "text": "60 seconds", "correct": false },
      { "label": "C", "text": "5 minutes", "correct": false },
      { "label": "D", "text": "60 minutes", "correct": false }
    ]
  },
  {
    "id": 163,
    "question": "What are the responsibilities of Snowflake's Cloud Service layer? (Choose three.)",
    "options": [
      { "label": "A", "text": "Authentication", "correct": true },
      { "label": "B", "text": "Resource management", "correct": true },
      { "label": "C", "text": "Virtual warehouse caching", "correct": false },
      { "label": "D", "text": "Query parsing and optimization", "correct": true },
      { "label": "E", "text": "Query execution", "correct": false },
      { "label": "F", "text": "Physical storage of micro-partitions", "correct": false }
    ]
  },
  {
    "id": 164,
    "question": "How long is the Fail-safe period for temporary and transient tables?",
    "options": [
      { "label": "A", "text": "There is no Fail-safe period for these tables", "correct": true },
      { "label": "B", "text": "1 day", "correct": false },
      { "label": "C", "text": "7 days", "correct": false },
      { "label": "D", "text": "31 days", "correct": false },
      { "label": "E", "text": "90 days", "correct": false }
    ]
  },
  {
    "id": 165,
    "question": "Which command should be used to download files from a Snowflake stage to a local folder on a client's machine?",
    "options": [
      { "label": "A", "text": "PUT", "correct": false },
      { "label": "B", "text": "GET", "correct": true },
      { "label": "C", "text": "COPY", "correct": false },
      { "label": "D", "text": "SELECT", "correct": false }
    ]
  },
  {
    "id": 166,
    "question": "How does Snowflake Fail-safe protect data in a permanent table?",
    "options": [
      { "label": "A", "text": "Data is available up to 1 day, recoverable by user operations", "correct": false },
      { "label": "B", "text": "Data is available for 7 days, recoverable by user operations", "correct": false },
      { "label": "C", "text": "Data is available for 7 days, recoverable only by Snowflake Support", "correct": true },
      { "label": "D", "text": "Data is available up to 1 day, recoverable only by Snowflake Support", "correct": false }
    ]
  },
  {
    "id": 167,
    "question": "What action should be taken to address this situation?",
    "options": [
      { "label": "A", "text": "Increase the warehouse size from Medium to 2XL", "correct": false },
      { "label": "B", "text": "Increase the value for the parameter MAX_CONCURRENCY_LEVEL", "correct": false },
      { "label": "C", "text": "Configure the warehouse to a multi-cluster warehouse", "correct": true },
      { "label": "D", "text": "Lower the value of STATEMENT_QUEUED_TIMEOUT_IN_SECONDS", "correct": false }
    ]
  },
  {
    "id": 168,
    "question": "Which minimum Snowflake edition allows for a dedicated metadata store?",
    "options": [
      { "label": "A", "text": "Standard", "correct": false },
      { "label": "B", "text": "Enterprise", "correct": false },
      { "label": "C", "text": "Business Critical", "correct": true },
      { "label": "D", "text": "Virtual Private Snowflake", "correct": false }
    ]
  },
  {
    "id": 169,
    "question": "Network policies can be set at which Snowflake levels? (Choose two.)",
    "options": [
      { "label": "A", "text": "Role", "correct": false },
      { "label": "B", "text": "Schema", "correct": false },
      { "label": "C", "text": "User", "correct": true },
      { "label": "D", "text": "Database", "correct": false },
      { "label": "E", "text": "Account", "correct": true },
      { "label": "F", "text": "Tables", "correct": false }
    ]
  },
  {
    "id": 170,
    "question": "What are the correct parameters for time travel and fail-safe in the Snowflake Enterprise Edition?",
    "options": [
      { "label": "A", "text": "Default TT = 0 days, Max TT = 30 days, Fail-safe = 1 day", "correct": false },
      { "label": "B", "text": "Default TT = 1 day, Max TT = 365 days, Fail-safe = 7 days", "correct": false },
      { "label": "C", "text": "Default TT = 0 days, Max TT = 90 days, Fail-safe = 7 days", "correct": false },
      { "label": "D", "text": "Default TT = 1 day, Max TT = 90 days, Fail-safe = 7 days", "correct": true },
      { "label": "E", "text": "Default TT = 7 days, Max TT = 1 day, Fail-safe = 90 days", "correct": false },
      { "label": "F", "text": "Default TT = 90 days, Max TT = 7 days, Fail-safe = 356 days", "correct": false }
    ]
  },
  {
    "id": 171,
    "question": "Which of the following objects are contained within a schema? (Choose two.)",
    "options": [
      { "label": "A", "text": "Role", "correct": false },
      { "label": "B", "text": "Stream", "correct": true },
      { "label": "C", "text": "Warehouse", "correct": false },
      { "label": "D", "text": "External table", "correct": true },
      { "label": "E", "text": "User", "correct": false },
      { "label": "F", "text": "Share", "correct": false }
    ]
  },
  {
    "id": 172,
    "question": "Which of the following statements describe features of Snowflake data caching? (Choose two.)",
    "options": [
      { "label": "A", "text": "When a virtual warehouse is suspended, the data cache is saved on remote storage", "correct": false },
      { "label": "B", "text": "When the cache is full, the least-recently used data is cleared first", "correct": true },
      { "label": "C", "text": "A user can only access their own queries from the query result cache", "correct": false },
      { "label": "D", "text": "A user must set USE_METADATA_CACHE=TRUE to use the metadata cache in queries", "correct": false },
      { "label": "E", "text": "RESULT_SCAN can access and filter the contents of the query result cache", "correct": true }
    ]
  },
  {
    "id": 173,
    "question": "How can this issue be resolved?",
    "options": [
      { "label": "A", "text": "Compress the file and load the compressed file", "correct": false },
      { "label": "B", "text": "Split the file into multiple files in the recommended size range (100 MB - 250 MB)", "correct": true },
      { "label": "C", "text": "Use a larger-sized warehouse", "correct": false },
      { "label": "D", "text": "Set STRIP_OUTER_ARRAY=TRUE in the COPY INTO command", "correct": false }
    ]
  },
  {
    "id": 174,
    "question": "What is a feature of a stored procedure in Snowflake?",
    "options": [
      { "label": "A", "text": "They can be created as secure, hiding underlying metadata", "correct": false },
      { "label": "B", "text": "They can access tables from only a single database", "correct": false },
      { "label": "C", "text": "They can only contain one SQL statement", "correct": false },
      { "label": "D", "text": "They can run with either caller's rights or owner's rights", "correct": true }
    ]
  },
  {
    "id": 175,
    "question": "Which columns are part of the result set of the Snowflake LATERAL FLATTEN command? (Choose two.)",
    "options": [
      { "label": "A", "text": "CONTENT", "correct": false },
      { "label": "B", "text": "PATH", "correct": false },
      { "label": "C", "text": "BYTE_SIZE", "correct": false },
      { "label": "D", "text": "INDEX", "correct": true },
      { "label": "E", "text": "DATATYPE", "correct": false }
    ]
  },
  {
    "id": 176,
    "question": "What is the minimum Snowflake edition required to create a materialized view?",
    "options": [
      { "label": "A", "text": "Standard Edition", "correct": false },
      { "label": "B", "text": "Enterprise Edition", "correct": true },
      { "label": "C", "text": "Business Critical Edition", "correct": false },
      { "label": "D", "text": "Virtual Private Snowflake Edition", "correct": false }
    ]
  },
  {
    "id": 177,
    "question": "Which Snowflake function will interpret an input string as a JSON document and produce a VARIANT value?",
    "options": [
      { "label": "A", "text": "parse_json()", "correct": true },
      { "label": "B", "text": "json_extract_path_text()", "correct": false },
      { "label": "C", "text": "object_construct()", "correct": false },
      { "label": "D", "text": "flatten", "correct": false }
    ]
  },
  {
    "id": 178,
    "question": "How are serverless features billed?",
    "options": [
      { "label": "A", "text": "Per second, multiplied by an automatic sizing for the job", "correct": true },
      { "label": "B", "text": "Per minute, multiplied by an automatic sizing for the job (min. one minute)", "correct": false },
      { "label": "C", "text": "Per second, multiplied by size set in SERVERLESS_FEATURES_SIZE", "correct": false },
      { "label": "D", "text": "They are not billed, unless total cost exceeds 10% of warehouse credits", "correct": false }
    ]
  },
  {
    "id": 179,
    "question": "Which Snowflake architectural layer is responsible for a query execution plan?",
    "options": [
      { "label": "A", "text": "Compute", "correct": false },
      { "label": "B", "text": "Data storage", "correct": false },
      { "label": "C", "text": "Cloud services", "correct": true },
      { "label": "D", "text": "Cloud provider", "correct": false }
    ]
  },
  {
    "id": 180,
    "question": "When unloading to a stage, which of the following is a recommended practice or approach?",
    "options": [
      { "label": "A", "text": "Set SINGLE=TRUE for larger files", "correct": false },
      { "label": "B", "text": "Use OBJECT_CONSTRUCT(*) when using Parquet", "correct": false },
      { "label": "C", "text": "Avoid using the CAST function", "correct": false },
      { "label": "D", "text": "Define an individual file format", "correct": true }
    ]
  },
  {
    "id": 181,
    "question": "Which SQL commands, when committed, will consume a stream and advance the stream offset? (Choose two.)",
    "options": [
      { "label": "A", "text": "UPDATE TABLE FROM STREAM", "correct": false },
      { "label": "B", "text": "SELECT FROM STREAM", "correct": false },
      { "label": "C", "text": "INSERT INTO TABLE SELECT FROM STREAM", "correct": true },
      { "label": "D", "text": "ALTER TABLE AS SELECT FROM STREAM", "correct": false },
      { "label": "E", "text": "BEGIN COMMIT", "correct": false }
    ]
  },
  {
    "id": 182,
    "question": "Which methods can be used to delete staged files from a Snowflake stage? (Choose two.)",
    "options": [
      { "label": "A", "text": "Use the DROP command after the load completes", "correct": false },
      { "label": "B", "text": "Specify the TEMPORARY option when creating the file format", "correct": false },
      { "label": "C", "text": "Specify the PURGE copy option in COPY INTO", "correct": true },
      { "label": "D", "text": "Use the REMOVE command after the load completes", "correct": true },
      { "label": "E", "text": "Use the DELETE LOAD HISTORY command after the load completes", "correct": false }
    ]
  },
  {
    "id": 183,
    "question": "On which of the following cloud platforms can a Snowflake account be hosted? (Choose three.)",
    "options": [
      { "label": "A", "text": "Amazon Web Services", "correct": true },
      { "label": "B", "text": "Private Virtual Cloud", "correct": false },
      { "label": "C", "text": "Oracle Cloud", "correct": false },
      { "label": "D", "text": "Microsoft Azure Cloud", "correct": true },
      { "label": "E", "text": "Google Cloud Platform", "correct": true },
      { "label": "F", "text": "Alibaba Cloud", "correct": false }
    ]
  },
  {
    "id": 184,
    "question": "What Snowflake role must be granted for a user to create and manage accounts?",
    "options": [
      { "label": "A", "text": "ACCOUNTADMIN", "correct": false },
      { "label": "B", "text": "ORGADMIN", "correct": true },
      { "label": "C", "text": "SECURITYADMIN", "correct": false },
      { "label": "D", "text": "SYSADMIN", "correct": false }
    ]
  },
  {
    "id": 185,
    "question": "What feature can be used to reorganize a very large table on one or more columns?",
    "options": [
      { "label": "A", "text": "Micro-partitions", "correct": false },
      { "label": "B", "text": "Clustering keys", "correct": true },
      { "label": "C", "text": "Key partitions", "correct": false },
      { "label": "D", "text": "Clustered partitions", "correct": false }
    ]
  },
  {
    "id": 186,
    "question": "What is an advantage of using an explain plan instead of the query profiler to evaluate query performance?",
    "options": [
      { "label": "A", "text": "The explain plan output is available graphically", "correct": false },
      { "label": "B", "text": "Explain plan can be used for performance analysis without executing the query", "correct": true },
      { "label": "C", "text": "Explain plan supports temporary table queries while the profiler does not", "correct": false },
      { "label": "D", "text": "Explain plan shows automatic data skew optimization info", "correct": false }
    ]
  },
  {
    "id": 187,
    "question": "Which data types are supported by Snowflake when using semi-structured data? (Choose two.)",
    "options": [
      { "label": "A", "text": "VARIANT", "correct": true },
      { "label": "B", "text": "VARRAY", "correct": false },
      { "label": "C", "text": "STRUCT", "correct": false },
      { "label": "D", "text": "ARRAY", "correct": true },
      { "label": "E", "text": "QUEUE", "correct": false }
    ]
  },
  {
    "id": 188,
    "question": "Why does Snowflake recommend file sizes of 100-250 MB compressed when loading data?",
    "options": [
      { "label": "A", "text": "Optimizes the virtual warehouse size and multi-cluster setting to economy mode", "correct": false },
      { "label": "B", "text": "Allows a user to import files in sequential order", "correct": false },
      { "label": "C", "text": "Increases latency staging and accuracy", "correct": false },
      { "label": "D", "text": "Allows for optimal parallel operations", "correct": true }
    ]
  },
  {
    "id": 189,
    "question": "Which of the following features are available with the Snowflake Enterprise edition? (Choose two.)",
    "options": [
      { "label": "A", "text": "Database replication and failover", "correct": false },
      { "label": "B", "text": "Automated index management", "correct": false },
      { "label": "C", "text": "Customer-managed keys (Tri-secret secure)", "correct": false },
      { "label": "D", "text": "Extended time travel", "correct": true },
      { "label": "E", "text": "Native support for geospatial data", "correct": true }
    ]
  },
  {
    "id": 190,
    "question": "What is the default file size when unloading data from Snowflake using the COPY command?",
    "options": [
      { "label": "A", "text": "5 MB", "correct": false },
      { "label": "B", "text": "8 GB", "correct": false },
      { "label": "C", "text": "16 MB", "correct": false },
      { "label": "D", "text": "32 MB", "correct": true }
    ]
  },
  {
    "id": 191,
    "question": "What features that are part of the Continuous Data Protection (CDP) feature set in Snowflake do not require additional configuration? (Choose two.)",
    "options": [
      { "label": "A", "text": "Row level access policies", "correct": false },
      { "label": "B", "text": "Data masking policies", "correct": false },
      { "label": "C", "text": "Data encryption", "correct": true },
      { "label": "D", "text": "Time Travel", "correct": true },
      { "label": "E", "text": "External tokenization", "correct": false }
    ]
  },
  {
    "id": 192,
    "question": "Which Snowflake layer is always leveraged when accessing a query from the result cache?",
    "options": [
      { "label": "A", "text": "Metadata", "correct": false },
      { "label": "B", "text": "Data Storage", "correct": false },
      { "label": "C", "text": "Compute", "correct": false },
      { "label": "D", "text": "Cloud Services", "correct": true }
    ]
  },
  {
    "id": 193,
    "question": "Which connectors are available in the downloads section of the Snowflake web interface (UI)? (Choose two.)",
    "options": [
      { "label": "A", "text": "SnowSQL", "correct": true },
      { "label": "B", "text": "JDBC", "correct": false },
      { "label": "C", "text": "ODBC", "correct": true },
      { "label": "D", "text": "HIVE", "correct": false },
      { "label": "E", "text": "Scala", "correct": false }
    ]
  },
  {
    "id": 194,
    "question": "A Snowflake Administrator needs to ensure that sensitive corporate data in Snowflake tables is not visible to end users but is partially visible to functional managers.",
    "options": [
      { "label": "A", "text": "Use data encryption", "correct": false },
      { "label": "B", "text": "Use dynamic data masking", "correct": true },
      { "label": "C", "text": "Use secure materialized views", "correct": false },
      { "label": "D", "text": "Revoke all roles for managers and users", "correct": false }
    ]
  },
  {
    "id": 195,
    "question": "Users are responsible for data storage costs until what occurs?",
    "options": [
      { "label": "A", "text": "Data expires from Time Travel", "correct": false },
      { "label": "B", "text": "Data expires from Fail-safe", "correct": true },
      { "label": "C", "text": "Data is deleted from a table", "correct": false },
      { "label": "D", "text": "Data is truncated from a table", "correct": false }
    ]
  },
  {
    "id": 196,
    "question": "A user has an application that writes a new file to a cloud storage location every 5 minutes.",
    "options": [
      { "label": "A", "text": "Create a task that runs a COPY INTO operation from an external stage every 5 minutes", "correct": false },
      { "label": "B", "text": "Create a task that PUTS the files in an internal stage and automate the wizard", "correct": false },
      { "label": "C", "text": "Create a task that runs a GET operation to periodically check for new files", "correct": false },
      { "label": "D", "text": "Set up cloud provider notifications and use Snowpipe with auto-ingest", "correct": true }
    ]
  },
  {
    "id": 197,
    "question": "What affects whether the query results cache can be used?",
    "options": [
      { "label": "A", "text": "If the query contains a deterministic function", "correct": false },
      { "label": "B", "text": "If the virtual warehouse has been suspended", "correct": false },
      { "label": "C", "text": "If the referenced data in the table has changed", "correct": true },
      { "label": "D", "text": "If multiple users are using the same virtual warehouse", "correct": false }
    ]
  },
  {
    "id": 198,
    "question": "Which of the following is an example of an operation that can be completed without requiring compute, assuming no queries have been executed previously?",
    "options": [
      { "label": "A", "text": "SELECT SUM(ORDER_AMT) FROM SALES;", "correct": false },
      { "label": "B", "text": "SELECT AVG(ORDER_QTY) FROM SALES;", "correct": false },
      { "label": "C", "text": "SELECT MIN(ORDER_AMT) FROM SALES;", "correct": false },
      { "label": "D", "text": "SELECT ORDER_AMT * ORDER_QTY FROM SALES;", "correct": true }
    ]
  },
  {
    "id": 199,
    "question": "How many days is load history for Snowpipe retained?",
    "options": [
      { "label": "A", "text": "1 day", "correct": false },
      { "label": "B", "text": "7 days", "correct": false },
      { "label": "C", "text": "14 days", "correct": true },
      { "label": "D", "text": "64 days", "correct": false }
    ]
  },
  {
    "id": 200,
    "question": "What Snowflake features allow virtual warehouses to handle high concurrency workloads? (Choose two.)",
    "options": [
      { "label": "A", "text": "The ability to scale up warehouses", "correct": false },
      { "label": "B", "text": "The use of warehouse auto scaling", "correct": true },
      { "label": "C", "text": "The ability to resize warehouses", "correct": false },
      { "label": "D", "text": "Use of multi-clustered warehouses", "correct": true },
      { "label": "E", "text": "The use of warehouse indexing", "correct": false }
    ]
  },
  {
    "id": 201,
    "question": "Which COPY INTO command outputs the data into one file?",
    "options": [
      { "label": "A", "text": "SINGLE=TRUE", "correct": true },
      { "label": "B", "text": "MAX_FILE_NUMBER=1", "correct": false },
      { "label": "C", "text": "FILE_NUMBER=1", "correct": false },
      { "label": "D", "text": "MULTIPLE=FALSE", "correct": false }
    ]
  },
  {
    "id": 202,
    "question": "In which scenarios would a user have to pay Cloud Services costs? (Choose two.)",
    "options": [
      { "label": "A", "text": "Compute Credits = 50 Credits Cloud Services = 10", "correct": true },
      { "label": "B", "text": "Compute Credits = 80 Credits Cloud Services = 5", "correct": false },
      { "label": "C", "text": "Compute Credits = 100 Credits Cloud Services = 9", "correct": false },
      { "label": "D", "text": "Compute Credits = 120 Credits Cloud Services = 10", "correct": false },
      { "label": "E", "text": "Compute Credits = 200 Credits Cloud Services = 26", "correct": true }
    ]
  },
  {
    "id": 203,
    "question": "How can this worksheet be shared?",
    "options": [
      { "label": "A", "text": "Create a zero-copy clone of the worksheet and grant permissions to teammates.", "correct": false },
      { "label": "B", "text": "Create a private Data Exchange so that any teammate can use the worksheet.", "correct": false },
      { "label": "C", "text": "Share the worksheet with teammates within Snowsight.", "correct": true },
      { "label": "D", "text": "Create a database and grant all permissions to teammates.", "correct": false }
    ]
  },
  {
    "id": 204,
    "question": "How can a row access policy be applied to a table or a view? (Choose two.)",
    "options": [
      { "label": "A", "text": "Within the policy DDL", "correct": false },
      { "label": "B", "text": "Within the create table or create view DDL", "correct": false },
      { "label": "C", "text": "By future APPLY for all objects in a schema", "correct": true },
      { "label": "D", "text": "Within a control table", "correct": false },
      { "label": "E", "text": "Using the command ALTER ADD ROW ACCESS POLICY", "correct": true }
    ]
  },
  {
    "id": 205,
    "question": "Which command can be used to load data files into a Snowflake stage?",
    "options": [
      { "label": "A", "text": "JOIN", "correct": false },
      { "label": "B", "text": "COPY INTO", "correct": false },
      { "label": "C", "text": "PUT", "correct": true },
      { "label": "D", "text": "GET", "correct": false }
    ]
  },
  {
    "id": 206,
    "question": "What types of data listings are available in the Snowflake Data Marketplace? (Choose two.)",
    "options": [
      { "label": "A", "text": "Reader", "correct": false },
      { "label": "B", "text": "Consumer", "correct": false },
      { "label": "C", "text": "Vendor", "correct": false },
      { "label": "D", "text": "Standard", "correct": true },
      { "label": "E", "text": "Personalized", "correct": true }
    ]
  },
  {
    "id": 207,
    "question": "What is the maximum Time Travel retention period for a temporary Snowflake table?",
    "options": [
      { "label": "A", "text": "90 days", "correct": false },
      { "label": "B", "text": "1 day", "correct": true },
      { "label": "C", "text": "7 days", "correct": false },
      { "label": "D", "text": "45 days", "correct": false }
    ]
  },
  {
    "id": 208,
    "question": "When should a multi-cluster warehouse be used in auto-scaling mode?",
    "options": [
      { "label": "A", "text": "When it is unknown how much compute power is needed", "correct": false },
      { "label": "B", "text": "If the select statement contains a large number of temporary tables or Common Table Expressions (CTEs)", "correct": false },
      { "label": "C", "text": "If the runtime of the executed query is very slow", "correct": false },
      { "label": "D", "text": "When a large number of concurrent queries are run on the same warehouse", "correct": true }
    ]
  },
  {
    "id": 209,
    "question": "What happens when a cloned table is replicated to a secondary database? (Choose two.)",
    "options": [
      { "label": "A", "text": "A read-only copy of the cloned tables is stored.", "correct": true },
      { "label": "B", "text": "The replication will not be successful.", "correct": false },
      { "label": "C", "text": "The physical data is replicated.", "correct": false },
      { "label": "D", "text": "Additional costs for storage are charged to a secondary account.", "correct": false },
      { "label": "E", "text": "Metadata pointers to cloned tables are replicated.", "correct": true }
    ]
  },
  {
    "id": 210,
    "question": "Snowflake supports the use of external stages with which cloud platforms? (Choose three.)",
    "options": [
      { "label": "A", "text": "Amazon Web Services", "correct": true },
      { "label": "B", "text": "Docker", "correct": false },
      { "label": "C", "text": "IBM Cloud", "correct": false },
      { "label": "D", "text": "Microsoft Azure Cloud", "correct": true },
      { "label": "E", "text": "Google Cloud Platform", "correct": true },
      { "label": "F", "text": "Oracle Cloud", "correct": false }
    ]
  },
  {
    "id": 211,
    "question": "What is a limitation of a Materialized View?",
    "options": [
      { "label": "A", "text": "A Materialized View cannot support any aggregate functions", "correct": false },
      { "label": "B", "text": "A Materialized View can only reference up to two tables", "correct": false },
      { "label": "C", "text": "A Materialized View cannot be joined with other tables", "correct": false },
      { "label": "D", "text": "A Materialized View cannot be defined with a JOIN", "correct": true }
    ]
  },
  {
    "id": 212,
    "question": "In the Snowflake access control model, which entity owns an object by default?",
    "options": [
      { "label": "A", "text": "The user who created the object", "correct": false },
      { "label": "B", "text": "The SYSADMIN role", "correct": false },
      { "label": "C", "text": "Ownership depends on the type of object", "correct": false },
      { "label": "D", "text": "The role used to create the object", "correct": true }
    ]
  },
  {
    "id": 213,
    "question": "What is the minimum Snowflake edition required to use Dynamic Data Masking?",
    "options": [
      { "label": "A", "text": "Standard", "correct": false },
      { "label": "B", "text": "Enterprise", "correct": true },
      { "label": "C", "text": "Business Critical", "correct": false },
      { "label": "D", "text": "Virtual Private Snowflake (VPC)", "correct": false }
    ]
  },
  {
    "id": 214,
    "question": "Which services does the Snowflake Cloud Services layer manage? (Choose two.)",
    "options": [
      { "label": "A", "text": "Compute resources", "correct": false },
      { "label": "B", "text": "Query execution", "correct": false },
      { "label": "C", "text": "Authentication", "correct": true },
      { "label": "D", "text": "Data storage", "correct": false },
      { "label": "E", "text": "Metadata", "correct": true }
    ]
  },
  {
    "id": 215,
    "question": "Which Snowflake feature will support limiting access to Personally Identifiable Information (PII)?",
    "options": [
      { "label": "A", "text": "Row access policies", "correct": false },
      { "label": "B", "text": "Data masking policies", "correct": true },
      { "label": "C", "text": "Data encryption", "correct": false },
      { "label": "D", "text": "Role-based access control", "correct": false }
    ]
  },
  {
    "id": 216,
    "question": "Which command can be used to verify if data has been uploaded to the external stage named my_stage?",
    "options": [
      { "label": "A", "text": "view @my_stage", "correct": false },
      { "label": "B", "text": "list @my_stage", "correct": true },
      { "label": "C", "text": "show @my_stage", "correct": false },
      { "label": "D", "text": "display @my_stage", "correct": false }
    ]
  },
  {
    "id": 217,
    "question": "Which tasks are performed in the Snowflake Cloud Services layer? (Choose two.)",
    "options": [
      { "label": "A", "text": "Management of metadata", "correct": true },
      { "label": "B", "text": "Computing the data", "correct": false },
      { "label": "C", "text": "Maintaining Availability Zones", "correct": false },
      { "label": "D", "text": "Infrastructure security", "correct": false },
      { "label": "E", "text": "Parsing and optimizing queries", "correct": true }
    ]
  },
  {
    "id": 218,
    "question": "What is true about sharing data in Snowflake? (Choose two.)",
    "options": [
      { "label": "A", "text": "The Data Consumer pays for data storage as well as for data computing.", "correct": false },
      { "label": "B", "text": "The shared data is copied into the Data Consumer account, so the Consumer can modify it without impacting the base data of the Provider.", "correct": false },
      { "label": "C", "text": "A Snowflake account can both provide and consume shared data.", "correct": true },
      { "label": "D", "text": "The Provider is charged for compute resources used by the Data Consumer to query the shared data.", "correct": false },
      { "label": "E", "text": "The Data Consumer pays only for compute resources to query the shared data.", "correct": true }
    ]
  },
  {
    "id": 219,
    "question": "How can a user extract the dealership information from the JSON stored in a VARIANT column called src of the CAR_SALES table?",
    "options": [
      { "label": "A", "text": "select src:dealership from car_sales;", "correct": true },
      { "label": "B", "text": "select src.dealership from car_sales;", "correct": false },
      { "label": "C", "text": "select src:Dealership from car_sales;", "correct": false },
      { "label": "D", "text": "select dealership from car_sales;", "correct": false }
    ]
  },
  {
    "id": 220,
    "question": "Which Snowflake layer is responsible for query parsing and optimization?",
    "options": [
      { "label": "A", "text": "Data Storage layer", "correct": false },
      { "label": "B", "text": "Compute layer", "correct": false },
      { "label": "C", "text": "Cloud Services layer", "correct": true },
      { "label": "D", "text": "Client layer", "correct": false }
    ]
  },
  {
    "id": 221,
    "question": "Which of the following significantly improves the performance of selective point lookup queries on a table?",
    "options": [
      { "label": "A", "text": "Clustering", "correct": true },
      { "label": "B", "text": "Materialized Views", "correct": false },
      { "label": "C", "text": "Zero-copy Cloning", "correct": false },
      { "label": "D", "text": "Search Optimization Service", "correct": false }
    ]
  },
  {
    "id": 222,
    "question": "Which of the following accurately describes shares?",
    "options": [
      { "label": "A", "text": "Tables, secure views, and secure UDFs can be shared", "correct": true },
      { "label": "B", "text": "Shares can be shared", "correct": false },
      { "label": "C", "text": "Data consumers can clone a new table from a share", "correct": false },
      { "label": "D", "text": "Access to a share cannot be revoked once granted", "correct": false }
    ]
  },
  {
    "id": 223,
    "question": "What are best practice recommendations for using the ACCOUNTADMIN system-defined role in Snowflake? (Choose two.)",
    "options": [
      { "label": "A", "text": "Ensure all ACCOUNTADMIN roles use Multi-factor Authentication (MFA).", "correct": true },
      { "label": "B", "text": "All users granted ACCOUNTADMIN role must be owned by the ACCOUNTADMIN role.", "correct": false },
      { "label": "C", "text": "The ACCOUNTADMIN role must be granted to only one user.", "correct": false },
      { "label": "D", "text": "Assign the ACCOUNTADMIN role to at least two users, but as few as possible.", "correct": true },
      { "label": "E", "text": "All users granted ACCOUNTADMIN role must also be granted SECURITYADMIN role.", "correct": false }
    ]
  },
  {
    "id": 224,
    "question": "In the query profiler view for a query, which components represent areas that can be used to help optimize query performance? (Choose two.)",
    "options": [
      { "label": "A", "text": "Bytes scanned", "correct": true },
      { "label": "B", "text": "Bytes sent over the network", "correct": false },
      { "label": "C", "text": "Number of partitions scanned", "correct": true },
      { "label": "D", "text": "Percentage scanned from cache", "correct": false },
      { "label": "E", "text": "External bytes scanned", "correct": false }
    ]
  },
  {
    "id": 225,
    "question": "What is the minimum Snowflake edition required for row-level security?",
    "options": [
      { "label": "A", "text": "Standard", "correct": false },
      { "label": "B", "text": "Enterprise", "correct": true },
      { "label": "C", "text": "Business Critical", "correct": false },
      { "label": "D", "text": "Virtual Private Snowflake", "correct": false }
    ]
  },
  {
    "id": 226,
    "question": "What is the minimum Fail-safe retention time period for transient tables?",
    "options": [
      { "label": "A", "text": "1 day", "correct": false },
      { "label": "B", "text": "7 days", "correct": false },
      { "label": "C", "text": "12 hours", "correct": false },
      { "label": "D", "text": "0 days", "correct": true }
    ]
  },
  {
    "id": 227,
    "question": "What is a machine learning and data science partner within the Snowflake Partner Ecosystem?",
    "options": [
      { "label": "A", "text": "Informatica", "correct": false },
      { "label": "B", "text": "Power BI", "correct": false },
      { "label": "C", "text": "Adobe", "correct": false },
      { "label": "D", "text": "DataRobot", "correct": true }
    ]
  },
  {
    "id": 228,
    "question": "Which statements are correct concerning the leveraging of third-party data from the Snowflake Data Marketplace? (Choose two.)",
    "options": [
      { "label": "A", "text": "Data is live, ready-to-query, and can be personalized.", "correct": false },
      { "label": "B", "text": "Data needs to be loaded into a cloud provider as a consumer account.", "correct": false },
      { "label": "C", "text": "Data is not available for copying or moving to an individual Snowflake account.", "correct": false },
      { "label": "D", "text": "Data is available without copying or moving.", "correct": true },
      { "label": "E", "text": "Data transformations are required when combining Data Marketplace datasets with existing data in Snowflake.", "correct": false }
    ]
  },
  {
    "id": 229,
    "question": "What impacts the credit consumption of maintaining a materialized view? (Choose two.)",
    "options": [
      { "label": "A", "text": "Whether or not it is also a secure view", "correct": false },
      { "label": "B", "text": "How often the underlying base table is queried", "correct": false },
      { "label": "C", "text": "How often the base table changes", "correct": true },
      { "label": "D", "text": "Whether the materialized view has a cluster key defined", "correct": false },
      { "label": "E", "text": "How often the materialized view is queried", "correct": true }
    ]
  },
  {
    "id": 230,
    "question": "What COPY INTO SQL command should be used to unload data into multiple files?",
    "options": [
      { "label": "A", "text": "SINGLE=TRUE", "correct": false },
      { "label": "B", "text": "MULTIPLE=TRUE", "correct": false },
      { "label": "C", "text": "MULTIPLE=FALSE", "correct": false },
      { "label": "D", "text": "SINGLE=FALSE", "correct": true }
    ]
  },
  {
    "id": 231,
    "question": "When cloning a database containing stored procedures and regular views, that have fully qualified table references, which of the following will occur?",
    "options": [
      { "label": "A", "text": "The cloned views and the stored procedures will reference the cloned tables in the cloned database.", "correct": false },
      { "label": "B", "text": "An error will occur, as views with qualified references cannot be cloned.", "correct": false },
      { "label": "C", "text": "An error will occur, as stored objects cannot be cloned.", "correct": false },
      { "label": "D", "text": "The stored procedures and views will refer to tables in the source database.", "correct": true }
    ]
  },
  {
    "id": 232,
    "question": "When loading data into Snowflake, how should the data be organized?",
    "options": [
      { "label": "A", "text": "Into single files with 100-250 MB of compressed data per file", "correct": true },
      { "label": "B", "text": "Into single files with 1-100 MB of compressed data per file", "correct": false },
      { "label": "C", "text": "Into files of maximum size of 1 GB of compressed data per file", "correct": false },
      { "label": "D", "text": "Into files of maximum size of 4 GB of compressed data per file", "correct": false }
    ]
  },
  {
    "id": 233,
    "question": "Which of the following objects can be directly restored using the UNDROP command? (Choose two.)",
    "options": [
      { "label": "A", "text": "Schema", "correct": true },
      { "label": "B", "text": "View", "correct": false },
      { "label": "C", "text": "Internal stage", "correct": false },
      { "label": "D", "text": "Table", "correct": true },
      { "label": "E", "text": "User", "correct": false },
      { "label": "F", "text": "Role", "correct": false }
    ]
  },
  {
    "id": 234,
    "question": "Which Snowflake SQL statement would be used to determine which users and roles have access to a role called MY_ROLE?",
    "options": [
      { "label": "A", "text": "SHOW GRANTS OF ROLE MY_ROLE", "correct": true },
      { "label": "B", "text": "SHOW GRANTS TO ROLE MY_ROLE", "correct": false },
      { "label": "C", "text": "SHOW GRANTS FOR ROLE MY_ROLE", "correct": false },
      { "label": "D", "text": "SHOW GRANTS ON ROLE MY_ROLE", "correct": false }
    ]
  },
  {
    "id": 235,
    "question": "What is the MINIMUM edition of Snowflake that is required to use a SCIM security integration?",
    "options": [
      { "label": "A", "text": "Business Critical Edition", "correct": false },
      { "label": "B", "text": "Standard Edition", "correct": false },
      { "label": "C", "text": "Virtual Private Snowflake (VPS)", "correct": false },
      { "label": "D", "text": "Enterprise Edition", "correct": true }
    ]
  },
  {
    "id": 236,
    "question": "How can a user retrieve the first version of a transient table after three days?",
    "options": [
      { "label": "A", "text": "Use Time Travel, as long as DATA_RETENTION_TIME_IN_DAYS was set to at least 3 days.", "correct": true },
      { "label": "B", "text": "The transient table version cannot be retrieved after 24 hours.", "correct": false },
      { "label": "C", "text": "Contact Snowflake Support to have the data retrieved from Fail-safe storage.", "correct": false },
      { "label": "D", "text": "Use the FAIL_SAFE parameter for Time Travel to retrieve the data from Fail-safe storage.", "correct": false }
    ]
  },
  {
    "id": 237,
    "question": "What should be done to reduce query queue volume in a warehouse? (Choose two.)",
    "options": [
      { "label": "A", "text": "Use multi-clustered warehousing to scale out warehouse capacity.", "correct": true },
      { "label": "B", "text": "Scale up the warehouse size to allow queries to execute faster.", "correct": true },
      { "label": "C", "text": "Stop and start the warehouse to clear the queued queries.", "correct": false },
      { "label": "D", "text": "Migrate some queries to a new warehouse to reduce load.", "correct": false },
      { "label": "E", "text": "Limit user access to the warehouse so fewer queries are run against it.", "correct": false }
    ]
  },
  {
    "id": 238,
    "question": "Which features associated with Continuous Data Protection (CDP) require additional Snowflake-provided data storage? (Choose two.)",
    "options": [
      { "label": "A", "text": "Tri-Secret Secure", "correct": false },
      { "label": "B", "text": "Time Travel", "correct": true },
      { "label": "C", "text": "Fail-safe", "correct": true },
      { "label": "D", "text": "Data encryption", "correct": false },
      { "label": "E", "text": "External stages", "correct": false }
    ]
  },
  {
    "id": 239,
    "question": "Where can a user find and review the failed logins of a specific user for the past 30 days?",
    "options": [
      { "label": "A", "text": "The USERS view in ACCOUNT_USAGE", "correct": false },
      { "label": "B", "text": "The LOGIN_HISTORY view in ACCOUNT_USAGE", "correct": true },
      { "label": "C", "text": "The ACCESS_HISTORY view in ACCOUNT_USAGE", "correct": false },
      { "label": "D", "text": "The SESSIONS view in ACCOUNT_USAGE", "correct": false }
    ]
  },
  {
    "id": 240,
    "question": "What is the purpose of an External Function?",
    "options": [
      { "label": "A", "text": "To call code that executes outside of Snowflake", "correct": true },
      { "label": "B", "text": "To run a function in another Snowflake database", "correct": false },
      { "label": "C", "text": "To share data in Snowflake with external parties", "correct": false },
      { "label": "D", "text": "To ingest data from on-premises data sources", "correct": false }
    ]
  },
  {
    "id": 241,
    "question": "Which of the following statements apply to Snowflake in terms of security? (Choose two.)",
    "options": [
      { "label": "A", "text": "Snowflake leverages a Role-Based Access Control (RBAC) model.", "correct": true },
      { "label": "B", "text": "Snowflake requires a user to configure an IAM user to connect to the database.", "correct": false },
      { "label": "C", "text": "All data in Snowflake is encrypted.", "correct": true },
      { "label": "D", "text": "Snowflake can run within a user's own Virtual Private Cloud (VPC).", "correct": false },
      { "label": "E", "text": "All data in Snowflake is compressed.", "correct": false }
    ]
  },
  {
    "id": 242,
    "question": "When the user returns, how much billable compute time will have been consumed?",
    "options": [
      { "label": "A", "text": "4 minutes", "correct": false },
      { "label": "B", "text": "10 minutes", "correct": true },
      { "label": "C", "text": "14 minutes", "correct": false },
      { "label": "D", "text": "24 minutes", "correct": false }
    ]
  },
  {
    "id": 243,
    "question": "What can be used to view warehouse usage over time? (Choose two.)",
    "options": [
      { "label": "A", "text": "The LOAD HISTORY view", "correct": false },
      { "label": "B", "text": "The query history view", "correct": false },
      { "label": "C", "text": "The SHOW WAREHOUSES command", "correct": false },
      { "label": "D", "text": "The WAREHOUSE_METERING_HISTORY view", "correct": true },
      { "label": "E", "text": "The billing and usage tab in the Snowflake web UI", "correct": true }
    ]
  },
  {
    "id": 244,
    "question": "What actions will prevent leveraging of the ResultSet cache? (Choose two.)",
    "options": [
      { "label": "A", "text": "Removing a column from the query SELECT list", "correct": true },
      { "label": "B", "text": "Stopping the virtual warehouse that the query is running against", "correct": false },
      { "label": "C", "text": "Clustering of the data used by the query", "correct": false },
      { "label": "D", "text": "Executing the RESULTS_SCAN() table function", "correct": false },
      { "label": "E", "text": "Changing a column that is not in the cached query", "correct": true }
    ]
  },
  {
    "id": 245,
    "question": "Which statement is true about running tasks in Snowflake?",
    "options": [
      { "label": "A", "text": "A task can be called using a CALL statement to run a set of predefined SQL commands.", "correct": false },
      { "label": "B", "text": "A task allows a user to execute a single SQL statement/command using a predefined schedule.", "correct": false },
      { "label": "C", "text": "A task allows a user to execute a set of SQL commands on a predefined schedule.", "correct": true },
      { "label": "D", "text": "A task can be executed using a SELECT statement to run a predefined SQL command.", "correct": false }
    ]
  },
  {
    "id": 246,
    "question": "Which data types does Snowflake support when querying semi-structured data? (Choose two.)",
    "options": [
      { "label": "A", "text": "VARIANT", "correct": true },
      { "label": "B", "text": "VARCHAR", "correct": false },
      { "label": "C", "text": "XML", "correct": false },
      { "label": "D", "text": "ARRAY", "correct": true },
      { "label": "E", "text": "BLOB", "correct": false }
    ]
  },
  {
    "id": 247,
    "question": "In an auto-scaling multi-cluster virtual warehouse with the setting SCALING_POLICY = ECONOMY enabled, when is another cluster started?",
    "options": [
      { "label": "A", "text": "When the system has enough load for 2 minutes", "correct": false },
      { "label": "B", "text": "When the system has enough load for 6 minutes", "correct": true },
      { "label": "C", "text": "When the system has enough load for 8 minutes", "correct": false },
      { "label": "D", "text": "When the system has enough load for 10 minutes", "correct": false }
    ]
  },
  {
    "id": 248,
    "question": "What is the following SQL command used for?\nSELECT * FROM TABLE(VALIDATE(t1, job_id => '_last'));",
    "options": [
      { "label": "A", "text": "To validate external table files in table t1 across all sessions", "correct": false },
      { "label": "B", "text": "To validate task SQL statements against table t1 in the last 14 days", "correct": false },
      { "label": "C", "text": "To validate a file for errors before it gets executed using a COPY command", "correct": false },
      { "label": "D", "text": "To return errors from the last executed COPY command into table t1 in the current session", "correct": true }
    ]
  },
  {
    "id": 249,
    "question": "How did Snowflake fulfill this query?",
    "options": [
      { "label": "A", "text": "Query against the result set cache", "correct": true },
      { "label": "B", "text": "Query against a virtual warehouse cache", "correct": false },
      { "label": "C", "text": "Query against the most-recently created micro-partition", "correct": false },
      { "label": "D", "text": "Query against the metadata cache", "correct": false }
    ]
  },
  {
    "id": 250,
    "question": "What happens when a virtual warehouse is resized?",
    "options": [
      { "label": "A", "text": "When increasing the size of an active warehouse the compute resource for all running and queued queries on the warehouse are affected.", "correct": false },
      { "label": "B", "text": "When reducing the size of a warehouse the compute resources are removed only when they are no longer being used to execute any current statements.", "correct": true },
      { "label": "C", "text": "The warehouse will be suspended while the new compute resource is provisioned and will resume automatically once provisioning is complete.", "correct": false },
      { "label": "D", "text": "Users who are trying to use the warehouse will receive an error message until the resizing is complete.", "correct": false }
    ]
  },
  {
    "id": 251,
    "question": "What tasks can be completed using the COPY command? (Choose two.)",
    "options": [
      { "label": "A", "text": "Columns can be aggregated.", "correct": false },
      { "label": "B", "text": "Columns can be joined with an existing table.", "correct": false },
      { "label": "C", "text": "Columns can be reordered.", "correct": true },
      { "label": "D", "text": "Columns can be omitted.", "correct": true },
      { "label": "E", "text": "Data can be loaded without the need to spin up a virtual warehouse.", "correct": false }
    ]
  },
  {
    "id": 252,
    "question": "Which Snowflake layer can be configured?",
    "options": [
      { "label": "A", "text": "Database Storage", "correct": false },
      { "label": "B", "text": "Cloud Services", "correct": false },
      { "label": "C", "text": "Query Processing", "correct": true },
      { "label": "D", "text": "Application Services", "correct": false }
    ]
  },
  {
    "id": 253,
    "question": "Query compilation occurs in which architecture layer of the Snowflake Cloud Data Platform?",
    "options": [
      { "label": "A", "text": "Compute layer", "correct": false },
      { "label": "B", "text": "Storage layer", "correct": false },
      { "label": "C", "text": "Cloud infrastructure layer", "correct": false },
      { "label": "D", "text": "Cloud services layer", "correct": true }
    ]
  },
  {
    "id": 254,
    "question": "If a size Small virtual warehouse is made up of two servers, how many servers make up a Large warehouse?",
    "options": [
      { "label": "A", "text": "4", "correct": false },
      { "label": "B", "text": "8", "correct": true },
      { "label": "C", "text": "16", "correct": false },
      { "label": "D", "text": "32", "correct": false }
    ]
  },
  {
    "id": 255,
    "question": "How can the clustering key be removed?",
    "options": [
      { "label": "A", "text": "ALTER TABLE PURGE CLUSTERING KEY", "correct": false },
      { "label": "B", "text": "ALTER TABLE DELETE CLUSTERING KEY", "correct": false },
      { "label": "C", "text": "ALTER TABLE DROP CLUSTERING KEY", "correct": true },
      { "label": "D", "text": "ALTER TABLE REMOVE CLUSTERING KEY", "correct": false }
    ]
  },
  {
    "id": 256,
    "question": "What is a core benefit of clustering?",
    "options": [
      { "label": "A", "text": "To guarantee uniquely identifiable records in the database", "correct": false },
      { "label": "B", "text": "To increase scan efficiency in queries by improving pruning", "correct": true },
      { "label": "C", "text": "To improve performance by creating a separate file for point lookups", "correct": false },
      { "label": "D", "text": "To provide data redundancy by duplicating micro-partitions", "correct": false }
    ]
  },
  {
    "id": 257,
    "question": "Which statement is true about Multi-Factor Authentication (MFA) in Snowflake?",
    "options": [
      { "label": "A", "text": "MFA can be enforced or applied for a given role.", "correct": false },
      { "label": "B", "text": "Snowflake users are automatically enrolled in MFA.", "correct": false },
      { "label": "C", "text": "Users enroll in MFA by submitting a request to Snowflake Support.", "correct": false },
      { "label": "D", "text": "MFA is an integrated Snowflake feature.", "correct": true }
    ]
  },
  {
    "id": 258,
    "question": "What data type should be used to store JSON data natively in Snowflake?",
    "options": [
      { "label": "A", "text": "JSON", "correct": false },
      { "label": "B", "text": "String", "correct": false },
      { "label": "C", "text": "Object", "correct": false },
      { "label": "D", "text": "VARIANT", "correct": true }
    ]
  },
  {
    "id": 259,
    "question": "What should be considered when deciding to use a Secure View? (Choose two.)",
    "options": [
      { "label": "A", "text": "No details of the query execution plan will be available in the query profiler.", "correct": true },
      { "label": "B", "text": "Once created there is no way to determine if a view is secure or not.", "correct": false },
      { "label": "C", "text": "Secure views do not take advantage of the same internal optimizations as standard views.", "correct": true },
      { "label": "D", "text": "It is not possible to create secure materialized views.", "correct": false },
      { "label": "E", "text": "The view definition of a secure view is still visible to users by way of the information schema.", "correct": false }
    ]
  },
  {
    "id": 260,
    "question": "The information schema provides storage information for which of the following objects? (Choose two.)",
    "options": [
      { "label": "A", "text": "Users", "correct": false },
      { "label": "B", "text": "Databases", "correct": true },
      { "label": "C", "text": "Internal stages", "correct": true },
      { "label": "D", "text": "Resource monitors", "correct": false },
      { "label": "E", "text": "Pipes", "correct": false }
    ]
  },
  {
    "id": 261,
    "question": "What is a responsibility of Snowflake's virtual warehouses?",
    "options": [
      { "label": "A", "text": "Infrastructure management", "correct": false },
      { "label": "B", "text": "Metadata management", "correct": false },
      { "label": "C", "text": "Query execution", "correct": true },
      { "label": "D", "text": "Query parsing and optimization", "correct": false },
      { "label": "E", "text": "Management of the storage layer", "correct": false }
    ]
  },
  {
    "id": 262,
    "question": "Which data type is supported by Snowflake data classification?",
    "options": [
      { "label": "A", "text": "Binary", "correct": false },
      { "label": "B", "text": "Float", "correct": false },
      { "label": "C", "text": "Geography", "correct": true },
      { "label": "D", "text": "Variant", "correct": false }
    ]
  },
  {
    "id": 263,
    "question": "When unloading data to an external stage, which compression format can be used for Parquet files with the COPY INTO command?",
    "options": [
      { "label": "A", "text": "BROTLI", "correct": false },
      { "label": "B", "text": "GZIP", "correct": false },
      { "label": "C", "text": "LZO", "correct": false },
      { "label": "D", "text": "ZSTD", "correct": true }
    ]
  },
  {
    "id": 264,
    "question": "Which SQL command can be used to verify the privileges that are granted to a role?",
    "options": [
      { "label": "A", "text": "SHOW GRANTS ON ROLE", "correct": false },
      { "label": "B", "text": "SHOW ROLES", "correct": false },
      { "label": "C", "text": "SHOW GRANTS TO ROLE", "correct": true },
      { "label": "D", "text": "SHOW GRANTS FOR ROLE", "correct": false }
    ]
  },
  {
    "id": 265,
    "question": "Which Query Profile result indicates that a warehouse is sized too small?",
    "options": [
      { "label": "A", "text": "There are a lot of filter nodes.", "correct": false },
      { "label": "B", "text": "Bytes are spilling to external storage.", "correct": true },
      { "label": "C", "text": "The number of processed rows is very high.", "correct": false },
      { "label": "D", "text": "The number of partitions scanned is the same as partitions total.", "correct": false }
    ]
  },
  {
    "id": 266,
    "question": "What is the default Time Travel retention period?",
    "options": [
      { "label": "A", "text": "1 day", "correct": true },
      { "label": "B", "text": "7 days", "correct": false },
      { "label": "C", "text": "45 days", "correct": false },
      { "label": "D", "text": "90 days", "correct": false }
    ]
  },
  {
    "id": 267,
    "question": "Which of the following are best practice recommendations that should be considered when loading data into Snowflake? (Choose two.)",
    "options": [
      { "label": "A", "text": "Load files that are approximately 25 MB or smaller.", "correct": false },
      { "label": "B", "text": "Remove all dates and timestamps.", "correct": false },
      { "label": "C", "text": "Load files that are approximately 100-250 MB (or larger).", "correct": true },
      { "label": "D", "text": "Avoid using embedded characters such as commas for numeric data types.", "correct": true },
      { "label": "E", "text": "Remove semi-structured data types.", "correct": false }
    ]
  },
  {
    "id": 268,
    "question": "Which schema has the RESOURCE_MONITORS view?",
    "options": [
      { "label": "A", "text": "ACCOUNT_USAGE", "correct": true },
      { "label": "B", "text": "READER_ACCOUNT_USAGE", "correct": false },
      { "label": "C", "text": "INFORMATION_SCHEMA", "correct": false },
      { "label": "D", "text": "WAREHOUSE_USAGE_SCHEMA", "correct": false }
    ]
  },
  {
    "id": 269,
    "question": "What is the purpose of enabling Federated Authentication on a Snowflake account?",
    "options": [
      { "label": "A", "text": "Disables the ability to use key pair and basic authentication (e.g., username/password) when connecting", "correct": false },
      { "label": "B", "text": "Allows dual Multi-Factor Authentication (MFA) when connecting to Snowflake", "correct": false },
      { "label": "C", "text": "Forces users to connect through a secure network proxy", "correct": false },
      { "label": "D", "text": "Allows users to connect using secure single sign-on (SSO) through an external identity provider", "correct": true }
    ]
  },
  {
    "id": 270,
    "question": "Which Snowflake partner category is represented at the top of this diagram (labeled 1)?",
    "options": [
      { "label": "A", "text": "Business Intelligence", "correct": false },
      { "label": "B", "text": "Machine Learning and Data Science", "correct": false },
      { "label": "C", "text": "Security and Governance", "correct": false },
      { "label": "D", "text": "Data Integration", "correct": true }
    ]
  },
  {
    "id": 271,
    "question": "Which object types are protected by Fail-safe? (Choose two.)",
    "options": [
      { "label": "A", "text": "Permanent Tables", "correct": true },
      { "label": "B", "text": "Temporary Tables", "correct": false },
      { "label": "C", "text": "External Tables", "correct": false },
      { "label": "D", "text": "Materialized Views", "correct": true },
      { "label": "E", "text": "Transient Tables", "correct": false }
    ]
  },
  {
    "id": 272,
    "question": "Snowflake's approach to the management of system access combines which of the following models? (Choose two.)",
    "options": [
      { "label": "A", "text": "Security Assertion Markup Language (SAML)", "correct": false },
      { "label": "B", "text": "Role-Based Access Control (RBAC)", "correct": true },
      { "label": "C", "text": "Identity Access Management (IAM)", "correct": false },
      { "label": "D", "text": "Create, Read, Update, and Delete (CRUD)", "correct": false },
      { "label": "E", "text": "Discretionary Access Control (DAC)", "correct": true },
      { "label": "F", "text": "Mandatory Access Control (MAC)", "correct": false }
    ]
  },
  {
    "id": 273,
    "question": "According to Snowflake best practice recommendations, which role should be used to create databases?",
    "options": [
      { "label": "A", "text": "ACCOUNTADMIN", "correct": false },
      { "label": "B", "text": "SYSADMIN", "correct": true },
      { "label": "C", "text": "SECURITYADMIN", "correct": false },
      { "label": "D", "text": "USERADMIN", "correct": false }
    ]
  },
  {
    "id": 274,
    "question": "To add or remove search optimization for a table, a user must have which of the following privileges or roles? (Choose two.)",
    "options": [
      { "label": "A", "text": "The MODIFY privilege on the table", "correct": false },
      { "label": "B", "text": "The OWNERSHIP privilege on the table", "correct": true },
      { "label": "C", "text": "A SECURITYADMIN role", "correct": false },
      { "label": "D", "text": "The ADD SEARCH OPTIMIZATION privilege on the schema that contains the table", "correct": true },
      { "label": "E", "text": "The SELECT privilege on the table", "correct": false }
    ]
  },
  {
    "id": 275,
    "question": "While using a COPY command with a Validation_mode parameter, which of the following statements will return an error?",
    "options": [
      { "label": "A", "text": "Statements that insert a duplicate record during a load", "correct": false },
      { "label": "B", "text": "Statements that have a specific data type in the source", "correct": false },
      { "label": "C", "text": "Statements that have duplicate file names", "correct": false },
      { "label": "D", "text": "Statements that transform data during a load", "correct": true }
    ]
  },
  {
    "id": 276,
    "question": "When is the result set cache no longer available? (Choose two.)",
    "options": [
      { "label": "A", "text": "When another warehouse is used to execute the query", "correct": false },
      { "label": "B", "text": "When another user executes the query", "correct": false },
      { "label": "C", "text": "When the underlying data has changed", "correct": true },
      { "label": "D", "text": "When the warehouse used to execute the query is suspended", "correct": true },
      { "label": "E", "text": "When it has been 24 hours since the last query", "correct": false }
    ]
  },
  {
    "id": 277,
    "question": "What is the recommended file sizing for data loading using Snowpipe?",
    "options": [
      { "label": "A", "text": "A compressed file size greater than 100 MB, and up to 250 MB", "correct": false },
      { "label": "B", "text": "A compressed file size greater than 100 GB, and up to 250 GB", "correct": false },
      { "label": "C", "text": "A compressed file size greater than 10 MB, and up to 100 MB", "correct": true },
      { "label": "D", "text": "A compressed file size greater than 1 GB, and up to 2 GB", "correct": false }
    ]
  },
  {
    "id": 278,
    "question": "Which statements are true concerning Snowflake's underlying cloud infrastructure? (Choose three.)",
    "options": [
      { "label": "A", "text": "Snowflake data and services are deployed in a single availability zone within a cloud provider's region.", "correct": false },
      { "label": "B", "text": "Snowflake data and services are available in a single cloud provider and a single region; the use of multiple cloud providers is not supported.", "correct": false },
      { "label": "C", "text": "Snowflake can be deployed in a customer's private cloud using the customer's own compute and storage resources for Snowflake compute and storage.", "correct": false },
      { "label": "D", "text": "Snowflake uses the core compute and storage services of each cloud provider for its own compute and storage.", "correct": true },
      { "label": "E", "text": "All three layers of Snowflake's architecture (storage, compute, and cloud services) are deployed and managed entirely on a selected cloud platform.", "correct": true },
      { "label": "F", "text": "Snowflake data and services are deployed in at least three availability zones within a cloud provider's region.", "correct": true }
    ]
  },
  {
    "id": 279,
    "question": "Which command can be used to view the list of files that has been uploaded to the stage?",
    "options": [
      { "label": "A", "text": "list @mytable;", "correct": false },
      { "label": "B", "text": "list @%mytable;", "correct": false },
      { "label": "C", "text": "list @%mystage;", "correct": false },
      { "label": "D", "text": "list @mystage;", "correct": true }
    ]
  },
  {
    "id": 280,
    "question": "What is a best practice after creating a custom role?",
    "options": [
      { "label": "A", "text": "Create the custom role using the SYSADMIN role.", "correct": false },
      { "label": "B", "text": "Assign the custom role to the SYSADMIN role.", "correct": true },
      { "label": "C", "text": "Assign the custom role to the PUBLIC role.", "correct": false },
      { "label": "D", "text": "Add _CUSTOM to all custom role names.", "correct": false }
    ]
  },
  {
    "id": 281,
    "question": "Which is the MINIMUM required Snowflake edition that a user must have if they want to use AWS/Azure Privatelink or Google Cloud Private Service Connect?",
    "options": [
      { "label": "A", "text": "Standard", "correct": false },
      { "label": "B", "text": "Premium", "correct": false },
      { "label": "C", "text": "Enterprise", "correct": false },
      { "label": "D", "text": "Business Critical", "correct": true }
    ]
  },
  {
    "id": 282,
    "question": "Which of the following query profiler variables will indicate that a virtual warehouse is not sized correctly for the query being executed?",
    "options": [
      { "label": "A", "text": "Bytes sent over the network", "correct": false },
      { "label": "B", "text": "Synchronization", "correct": false },
      { "label": "C", "text": "Initialization", "correct": false },
      { "label": "D", "text": "Remote spillage", "correct": true }
    ]
  },
  {
    "id": 283,
    "question": "Which of the following Snowflake capabilities are available in all Snowflake editions? (Choose two.)",
    "options": [
      { "label": "A", "text": "Customer-managed encryption keys through Tri-Secret Secure", "correct": false },
      { "label": "B", "text": "Automatic encryption of all data", "correct": true },
      { "label": "C", "text": "Up to 90 days of data recovery through Time Travel", "correct": false },
      { "label": "D", "text": "Object-level access control", "correct": true },
      { "label": "E", "text": "Column-level security to apply data masking policies to tables and views", "correct": false }
    ]
  },
  {
    "id": 284,
    "question": "A PUT command can be used to stage local files from which Snowflake interface?",
    "options": [
      { "label": "A", "text": "SnowSQL", "correct": true },
      { "label": "B", "text": "Snowflake classic web interface (UI)", "correct": false },
      { "label": "C", "text": "Snowsight", "correct": false },
      { "label": "D", "text": ".NET driver", "correct": false }
    ]
  },
  {
    "id": 285,
    "question": "Which of the following indicates that it may be appropriate to use a clustering key for a table? (Choose two.)",
    "options": [
      { "label": "A", "text": "The table contains a column that has very low cardinality.", "correct": false },
      { "label": "B", "text": "DML statements that are being issued against the table are blocked.", "correct": false },
      { "label": "C", "text": "The table has a small number of micro-partitions.", "correct": false },
      { "label": "D", "text": "Queries on the table are running slower than expected.", "correct": true },
      { "label": "E", "text": "The clustering depth for the table is large.", "correct": true }
    ]
  },
  {
    "id": 286,
    "question": "Which cache type is used to cache data output from SQL queries?",
    "options": [
      { "label": "A", "text": "Metadata cache", "correct": false },
      { "label": "B", "text": "Result cache", "correct": true },
      { "label": "C", "text": "Remote cache", "correct": false },
      { "label": "D", "text": "Local file cache", "correct": false }
    ]
  },
  {
    "id": 287,
    "question": "Which of the following describes how clustering keys work in Snowflake?",
    "options": [
      { "label": "A", "text": "Clustering keys update the micro-partitions in place with a full sort, and impact the DML operations.", "correct": false },
      { "label": "B", "text": "Clustering keys sort the designated columns over time, without blocking DML operations.", "correct": true },
      { "label": "C", "text": "Clustering keys create a distributed, parallel data structure of pointers to a table's rows and columns.", "correct": false },
      { "label": "D", "text": "Clustering keys establish a hashed key on each node of a virtual warehouse to optimize joins at run-time.", "correct": false }
    ]
  },
  {
    "id": 288,
    "question": "Which of the following operations require the use of a running virtual warehouse? (Choose two.)",
    "options": [
      { "label": "A", "text": "Downloading data from an internal stage", "correct": false },
      { "label": "B", "text": "Listing files in a stage", "correct": false },
      { "label": "C", "text": "Executing a stored procedure", "correct": true },
      { "label": "D", "text": "Altering a table", "correct": false },
      { "label": "E", "text": "Querying data from a materialized view", "correct": true }
    ]
  },
  {
    "id": 289,
    "question": "What is used to limit the credit usage of a virtual warehouse within a Snowflake account?",
    "options": [
      { "label": "A", "text": "Load monitor", "correct": false },
      { "label": "B", "text": "Resource monitor", "correct": true },
      { "label": "C", "text": "Query Profile", "correct": false },
      { "label": "D", "text": "Stream", "correct": false }
    ]
  },
  {
    "id": 290,
    "question": "What are the benefits of the replication feature in Snowflake? (Choose two.)",
    "options": [
      { "label": "A", "text": "Disaster recovery", "correct": true },
      { "label": "B", "text": "Time Travel", "correct": false },
      { "label": "C", "text": "Fail-safe", "correct": false },
      { "label": "D", "text": "Database failover and failback", "correct": true },
      { "label": "E", "text": "Data security", "correct": false }
    ]
  },
  {
    "id": 291,
    "question": "Which of the following roles are recommended to create and manage users and roles? (Choose two.)",
    "options": [
      { "label": "A", "text": "SYSADMIN", "correct": false },
      { "label": "B", "text": "SECURITYADMIN", "correct": true },
      { "label": "C", "text": "PUBLIC", "correct": false },
      { "label": "D", "text": "ACCOUNTADMIN", "correct": false },
      { "label": "E", "text": "USERADMIN", "correct": true }
    ]
  },
  {
    "id": 292,
    "question": "When can a newly configured virtual warehouse start running SQL queries?",
    "options": [
      { "label": "A", "text": "After 50% of the warehouse provisioning has completed", "correct": false },
      { "label": "B", "text": "During the time slots defined by the ACCOUNTADMIN", "correct": false },
      { "label": "C", "text": "When the warehouse provisioning is completed", "correct": true },
      { "label": "D", "text": "After the warehouse replication is completed", "correct": false }
    ]
  },
  {
    "id": 293,
    "question": "What actions will prevent leveraging of the ResultSet cache?",
    "options": [
      { "label": "A", "text": "Removing a column from the query SELECT list", "correct": true },
      { "label": "B", "text": "Stopping the virtual warehouse that the query is running against", "correct": false },
      { "label": "C", "text": "If the result has not been reused within the last 12 hours", "correct": false },
      { "label": "D", "text": "Executing the RESULTS_SCAN() table function", "correct": false }
    ]
  },
  {
    "id": 294,
    "question": "Which of the following are benefits of micro-partitioning? (Choose two.)",
    "options": [
      { "label": "A", "text": "Micro-partitions cannot overlap in their range of values.", "correct": false },
      { "label": "B", "text": "Micro-partitions are immutable objects that support the use of Time Travel.", "correct": true },
      { "label": "C", "text": "Micro-partitions can reduce the amount of I/O from object storage to virtual warehouses.", "correct": true },
      { "label": "D", "text": "Rows are automatically stored in sorted order within micro-partitions.", "correct": false },
      { "label": "E", "text": "Micro-partitions can be defined on a schema-by-schema basis.", "correct": false }
    ]
  },
  {
    "id": 295,
    "question": "Which data type can be used to store geospatial data in Snowflake?",
    "options": [
      { "label": "A", "text": "Variant", "correct": false },
      { "label": "B", "text": "Object", "correct": false },
      { "label": "C", "text": "Geometry", "correct": false },
      { "label": "D", "text": "Geography", "correct": true }
    ]
  },
  {
    "id": 296,
    "question": "If all virtual warehouse resources are maximized while processing a query workload, what will happen to new queries that are submitted to the warehouse?",
    "options": [
      { "label": "A", "text": "All queries will terminate when the resources are maximized.", "correct": false },
      { "label": "B", "text": "The warehouse will scale out automatically", "correct": false },
      { "label": "C", "text": "The warehouse will move to a suspended state.", "correct": false },
      { "label": "D", "text": "New queries will be queued and executed when capacity is available.", "correct": true }
    ]
  },
  {
    "id": 297,
    "question": "Masking policies can be applied to which of the following Snowflake objects? (Choose two.)",
    "options": [
      { "label": "A", "text": "A materialized view", "correct": true },
      { "label": "B", "text": "A stored procedure", "correct": false },
      { "label": "C", "text": "A table", "correct": true },
      { "label": "D", "text": "A stream", "correct": false },
      { "label": "E", "text": "A pipe", "correct": false },
      { "label": "F", "text": "A User-Defined Function (UDF)", "correct": false }
    ]
  },
  {
    "id": 298,
    "question": "What actions are supported by Snowflake resource monitors? (Choose two.)",
    "options": [
      { "label": "A", "text": "Alert", "correct": false },
      { "label": "B", "text": "Notify", "correct": true },
      { "label": "C", "text": "Notify and suspend", "correct": true },
      { "label": "D", "text": "Abort", "correct": false },
      { "label": "E", "text": "Suspend immediately", "correct": false }
    ]
  },
  {
    "id": 299,
    "question": "A user executes the following SQL query: CREATE TABLE SALES_BKP LIKE SALES; What are the cost implications for processing this query?",
    "options": [
      { "label": "A", "text": "Processing costs will be generated based on how long the query takes.", "correct": false },
      { "label": "B", "text": "Storage costs will be generated based on the size of the data.", "correct": false },
      { "label": "C", "text": "No costs will be incurred as the query will use metadata.", "correct": true },
      { "label": "D", "text": "The cost for running the virtual warehouse will be charged by the second.", "correct": false }
    ]
  },
  {
    "id": 300,
    "question": "What is the maximum length of Time Travel available in the Snowflake Standard Edition?",
    "options": [
      { "label": "A", "text": "1 Day", "correct": false },
      { "label": "B", "text": "7 Days", "correct": true },
      { "label": "C", "text": "30 Days", "correct": false },
      { "label": "D", "text": "90 Days", "correct": false }
    ]
  },
  {
    "id": 301,
    "question": "What happens when an external or an internal stage is dropped? (Choose two.)",
    "options": [
      { "label": "A", "text": "When dropping an external stage, the files are not removed and only the stage is dropped.", "correct": true },
      { "label": "B", "text": "When dropping an external stage, both the stage and the files within the stage are removed.", "correct": false },
      { "label": "C", "text": "When dropping an internal stage, the files are deleted with the stage and the files are recoverable.", "correct": false },
      { "label": "D", "text": "When dropping an internal stage, the files are deleted with the stage and the files are not recoverable.", "correct": true },
      { "label": "E", "text": "When dropping an internal stage, only selected files are deleted with the stage and are not recoverable.", "correct": false }
    ]
  },
  {
    "id": 302,
    "question": "If the user runs the same COPY INTO command, what will happen?",
    "options": [
      { "label": "A", "text": "All data from all of the files on the stage will be appended to the table.", "correct": false },
      { "label": "B", "text": "Only data about new customers from the new files will be appended to the table.", "correct": false },
      { "label": "C", "text": "The operation will fail with the error UNCERTAIN FILES IN STAGE.", "correct": false },
      { "label": "D", "text": "All data from only the newly added files will be appended to the table.", "correct": true }
    ]
  },
  {
    "id": 303,
    "question": "Which parameter can be used to instruct a COPY command to verify data files instead of loading them into a specified table?",
    "options": [
      { "label": "A", "text": "STRIP_NULL_VALUES", "correct": false },
      { "label": "B", "text": "SKIP_BYTE_ORDER_MARK", "correct": false },
      { "label": "C", "text": "REPLACE_INVALID_CHARACTERS", "correct": false },
      { "label": "D", "text": "VALIDATION_MODE", "correct": true }
    ]
  },
  {
    "id": 304,
    "question": "Which of the following SQL statements will list the version of the drivers currently being used?",
    "options": [
      { "label": "A", "text": "Execute `SELECT CURRENT_ODBC_CLIENT();` from the Web UI", "correct": false },
      { "label": "B", "text": "Execute `SELECT CURRENT_JDBC_VERSION();` from SnowSQL", "correct": false },
      { "label": "C", "text": "Execute `SELECT CURRENT_CLIENT();` from an application", "correct": true },
      { "label": "D", "text": "Execute `SELECT CURRENT_VERSION();` from the Python Connector", "correct": false }
    ]
  },
  {
    "id": 305,
    "question": "Which Snowflake technique can be used to improve the performance of a query?",
    "options": [
      { "label": "A", "text": "Clustering", "correct": true },
      { "label": "B", "text": "Indexing", "correct": false },
      { "label": "C", "text": "Fragmenting", "correct": false },
      { "label": "D", "text": "Using INDEX_HINTS", "correct": false }
    ]
  },
  {
    "id": 306,
    "question": "What happens to the shared objects for users in a consumer account from a share, once a database has been created in that account?",
    "options": [
      { "label": "A", "text": "The shared objects are transferred.", "correct": false },
      { "label": "B", "text": "The shared objects are copied.", "correct": false },
      { "label": "C", "text": "The shared objects become accessible.", "correct": true },
      { "label": "D", "text": "The shared objects can be re-shared.", "correct": false }
    ]
  },
  {
    "id": 307,
    "question": "Using variables in Snowflake is denoted by using which SQL character?",
    "options": [
      { "label": "A", "text": "@", "correct": false },
      { "label": "B", "text": "&", "correct": false },
      { "label": "C", "text": "$", "correct": true },
      { "label": "D", "text": "#", "correct": false }
    ]
  },
  {
    "id": 308,
    "question": "Which commands should be used to grant the privilege allowing a role to select data from all current tables and any tables that will be created later in a schema? (Choose two.)",
    "options": [
      { "label": "A", "text": "grant USAGE on all tables in schema DB1.SCHEMA to role MYROLE;", "correct": false },
      { "label": "B", "text": "grant USAGE on future tables in schema DB1.SCHEMA to role MYROLE;", "correct": false },
      { "label": "C", "text": "grant SELECT on all tables in schema DB1.SCHEMA to role MYROLE;", "correct": true },
      { "label": "D", "text": "grant SELECT on future tables in schema DB1.SCHEMA to role MYROLE;", "correct": true },
      { "label": "E", "text": "grant SELECT on all tables in database DB1 to role MYROLE;", "correct": false },
      { "label": "F", "text": "grant SELECT on future tables in database DB1 to role MYROLE;", "correct": false }
    ]
  },
  {
    "id": 309,
    "question": "How can a user change which columns are referenced in a view?",
    "options": [
      { "label": "A", "text": "Modify the columns in the underlying table", "correct": false },
      { "label": "B", "text": "Use the ALTER VIEW command to update the view", "correct": false },
      { "label": "C", "text": "Recreate the view with the required changes", "correct": true },
      { "label": "D", "text": "Materialize the view to perform the changes", "correct": false }
    ]
  },
  {
    "id": 310,
    "question": "Which statement describes pruning?",
    "options": [
      { "label": "A", "text": "The filtering or disregarding of micro-partitions that are not needed to return a query.", "correct": true },
      { "label": "B", "text": "The return of micro-partitions values that overlap with each other to reduce a query's runtime.", "correct": false },
      { "label": "C", "text": "A service that is handled by the Snowflake Cloud Services layer to optimize caching.", "correct": false },
      { "label": "D", "text": "The ability to allow the result of a query to be accessed as if it were a table.", "correct": false }
    ]
  },
  {
    "id": 311,
    "question": "Which SQL command can be used to see the CREATE definition of a masking policy?",
    "options": [
      { "label": "A", "text": "SHOW MASKING POLICIES", "correct": false },
      { "label": "B", "text": "DESCRIBE MASKING POLICY", "correct": false },
      { "label": "C", "text": "GET_DDL", "correct": true },
      { "label": "D", "text": "LIST MASKING POLICIES", "correct": false }
    ]
  },
  {
    "id": 312,
    "question": "Which of the following is the Snowflake ACCOUNT_USAGE.METERING_HISTORY view used for?",
    "options": [
      { "label": "A", "text": "Gathering the hourly credit usage for an account", "correct": true },
      { "label": "B", "text": "Compiling an account's average cloud services cost over the previous month", "correct": false },
      { "label": "C", "text": "Summarizing the throughput of Snowpipe costs for an account", "correct": false },
      { "label": "D", "text": "Calculating the funds left on an account's contract", "correct": false }
    ]
  },
  {
    "id": 313,
    "question": "Query parsing and compilation occur in which architecture layer of the Snowflake Cloud Data Platform?",
    "options": [
      { "label": "A", "text": "Cloud services layer", "correct": true },
      { "label": "B", "text": "Compute layer", "correct": false },
      { "label": "C", "text": "Storage layer", "correct": false },
      { "label": "D", "text": "Cloud agnostic layer", "correct": false }
    ]
  },
  {
    "id": 314,
    "question": "Which of the following Snowflake objects can be shared using a secure share? (Choose two.)",
    "options": [
      { "label": "A", "text": "Materialized views", "correct": true },
      { "label": "B", "text": "Sequences", "correct": false },
      { "label": "C", "text": "Procedures", "correct": false },
      { "label": "D", "text": "Tables", "correct": true },
      { "label": "E", "text": "Secure User Defined Functions (UDFs)", "correct": false }
    ]
  },
  {
    "id": 315,
    "question": "What happens to the underlying table data when a CLUSTER BY clause is added to a Snowflake table?",
    "options": [
      { "label": "A", "text": "Data is hashed by the cluster key to facilitate fast searches for common data values", "correct": false },
      { "label": "B", "text": "Larger micro-partitions are created for common data values to reduce the number of partitions that must be scanned", "correct": false },
      { "label": "C", "text": "Smaller micro-partitions are created for common data values to allow for more parallelism", "correct": false },
      { "label": "D", "text": "Data may be colocated by the cluster key within the micro-partitions to improve pruning performance", "correct": true }
    ]
  },
  {
    "id": 316,
    "question": "Which of the following conditions must be met in order to return results from the results cache? (Choose two.)",
    "options": [
      { "label": "A", "text": "The user has the appropriate privileges on the objects associated with the query.", "correct": true },
      { "label": "B", "text": "Micro-partitions have been reclustered since the query was last run.", "correct": false },
      { "label": "C", "text": "The new query is run using the same virtual warehouse as the previous query.", "correct": false },
      { "label": "D", "text": "The query includes a User Defined Function (UDF).", "correct": false },
      { "label": "E", "text": "The query has been run within 24 hours of the previously-run query.", "correct": true }
    ]
  },
  {
    "id": 317,
    "question": "Which statement about billing applies to Snowflake credits?",
    "options": [
      { "label": "A", "text": "Credits are billed per-minute with a 60-minute minimum.", "correct": false },
      { "label": "B", "text": "Credits are used to pay for cloud data storage usage.", "correct": false },
      { "label": "C", "text": "Credits are consumed based on the number of credits billed for each hour that a warehouse runs.", "correct": false },
      { "label": "D", "text": "Credits are consumed based on the warehouse size and the time the warehouse is running.", "correct": true }
    ]
  },
  {
    "id": 318,
    "question": "A user needs to create a materialized view in the schema MYDB.MYSCHEMA. Which statement will provide this access?",
    "options": [
      { "label": "A", "text": "GRANT ROLE MYROLE TO USER USER1; CREATE MATERIALIZED VIEW ON SCHEMA MYDB.MYSCHEMA TO ROLE MYROLE;", "correct": false },
      { "label": "B", "text": "GRANT ROLE MYROLE TO USER USER1; CREATE MATERIALIZED VIEW ON SCHEMA MYDB.MYSCHEMA TO USER USER1;", "correct": false },
      { "label": "C", "text": "GRANT ROLE MYROLE TO USER USER1; CREATE MATERIALIZED VIEW ON SCHEMA MYDB.MYSCHEMA TO USER1;", "correct": false },
      { "label": "D", "text": "GRANT ROLE MYROLE TO USER USER1; CREATE MATERIALIZED VIEW ON SCHEMA MYDB.MYSCHEMA TO MYROLE;", "correct": true }
    ]
  },
  {
    "id": 319,
    "question": "What is the purpose of multi-cluster virtual warehouses?",
    "options": [
      { "label": "A", "text": "To create separate data warehouses to increase query optimization", "correct": false },
      { "label": "B", "text": "To allow users the ability to choose the type of compute nodes that make up a virtual warehouse cluster", "correct": false },
      { "label": "C", "text": "To eliminate or reduce queuing of concurrent queries", "correct": true },
      { "label": "D", "text": "To allow the warehouse to resize automatically", "correct": false }
    ]
  },
  {
    "id": 320,
    "question": "Which of the following is a valid source for an external stage when the Snowflake account is located on Microsoft Azure?",
    "options": [
      { "label": "A", "text": "An FTP server with TLS encryption", "correct": false },
      { "label": "B", "text": "An HTTPS server with WebDAV", "correct": false },
      { "label": "C", "text": "A Google Cloud storage bucket", "correct": false },
      { "label": "D", "text": "A Windows server file share on Azure", "correct": true }
    ]
  },
  {
    "id": 321,
    "question": "Which database objects can be shared with the Snowflake secure data sharing feature? (Choose two.)",
    "options": [
      { "label": "A", "text": "Files", "correct": false },
      { "label": "B", "text": "External tables", "correct": false },
      { "label": "C", "text": "Secure User-Defined Functions (UDFs)", "correct": true },
      { "label": "D", "text": "Sequences", "correct": false },
      { "label": "E", "text": "Streams", "correct": true }
    ]
  },
  {
    "id": 322,
    "question": "Which statements reflect key functionalities of a Snowflake Data Exchange? (Choose two.)",
    "options": [
      { "label": "A", "text": "If an account is enrolled with a Data Exchange, it will lose its access to the Snowflake Marketplace.", "correct": false },
      { "label": "B", "text": "A Data Exchange allows groups of accounts to share data privately among the accounts.", "correct": true },
      { "label": "C", "text": "A Data Exchange allows accounts to share data with third, non-Snowflake parties.", "correct": false },
      { "label": "D", "text": "Data Exchange functionality is available by default in accounts using the Enterprise edition or higher.", "correct": true },
      { "label": "E", "text": "The sharing of data in a Data Exchange is bidirectional. An account can be a provider for some datasets and a consumer for others.", "correct": false }
    ]
  },
  {
    "id": 323,
    "question": "A Snowflake user executed a query and received the results. Another user executed the same query 4 hours later. The data had not changed. What will occur?",
    "options": [
      { "label": "A", "text": "No virtual warehouse will be used, data will be read from the result cache.", "correct": true },
      { "label": "B", "text": "No virtual warehouse will be used, data will be read from the local disk cache.", "correct": false },
      { "label": "C", "text": "The default virtual warehouse will be used to read all data.", "correct": false },
      { "label": "D", "text": "The virtual warehouse that is defined at the session level will be used to read all data.", "correct": false }
    ]
  },
  {
    "id": 324,
    "question": "Which feature allows a user the ability to control the organization of data in a micro-partition?",
    "options": [
      { "label": "A", "text": "Range Partitioning", "correct": false },
      { "label": "B", "text": "Search Optimization Service", "correct": false },
      { "label": "C", "text": "Automatic Clustering", "correct": true },
      { "label": "D", "text": "Horizontal Partitioning", "correct": false }
    ]
  },
  {
    "id": 325,
    "question": "Which privilege must be granted to a share to allow secure views the ability to reference data in multiple databases?",
    "options": [
      { "label": "A", "text": "CREATE_SHARE on the account", "correct": false },
      { "label": "B", "text": "SHARE on databases and schemas", "correct": false },
      { "label": "C", "text": "SELECT on tables used by the secure view", "correct": false },
      { "label": "D", "text": "REFERENCE_USAGE on databases", "correct": true }
    ]
  },
  {
    "id": 326,
    "question": "In which use case does Snowflake apply egress charges?",
    "options": [
      { "label": "A", "text": "Data sharing within a specific region", "correct": false },
      { "label": "B", "text": "Query result retrieval", "correct": false },
      { "label": "C", "text": "Database replication", "correct": true },
      { "label": "D", "text": "Loading data into Snowflake", "correct": false }
    ]
  },
  {
    "id": 327,
    "question": "Which of the following compute resources or features are managed by Snowflake? (Choose two.)",
    "options": [
      { "label": "A", "text": "Execute a COPY command", "correct": false },
      { "label": "B", "text": "Updating data", "correct": false },
      { "label": "C", "text": "Snowpipe", "correct": true },
      { "label": "D", "text": "AUTOMATIC_CLUSTERING", "correct": true },
      { "label": "E", "text": "Scaling up a warehouse", "correct": false }
    ]
  },
  {
    "id": 328,
    "question": "A materialized view should be created when which of the following occurs? (Choose two.)",
    "options": [
      { "label": "A", "text": "There is minimal cost associated with running the query.", "correct": false },
      { "label": "B", "text": "The query consumes many compute resources every time it runs.", "correct": true },
      { "label": "C", "text": "The base table gets updated frequently.", "correct": false },
      { "label": "D", "text": "The query is highly optimized and does not consume many compute resources.", "correct": false },
      { "label": "E", "text": "The results of the query do not change often and are used frequently.", "correct": true }
    ]
  },
  {
    "id": 329,
    "question": "What privilege should a user be granted to change permissions for new objects in a managed access schema?",
    "options": [
      { "label": "A", "text": "Grant the OWNERSHIP privilege on the schema.", "correct": true },
      { "label": "B", "text": "Grant the OWNERSHIP privilege on the database.", "correct": false },
      { "label": "C", "text": "Grant the MANAGE GRANTS global privilege.", "correct": false },
      { "label": "D", "text": "Grant ALL privileges on the schema.", "correct": false }
    ]
  },
  {
    "id": 330,
    "question": "What happens when a Data Provider revokes privileges to a share on an object in their source database?",
    "options": [
      { "label": "A", "text": "The object immediately becomes unavailable for all Data Consumers.", "correct": true },
      { "label": "B", "text": "Any additional data arriving after this point in time will not be visible to Data Consumers.", "correct": false },
      { "label": "C", "text": "The Data Consumers stop seeing data updates and become responsible for storage charges for the object.", "correct": false },
      { "label": "D", "text": "A static copy of the object at the time the privilege was revoked is created in the Data Consumers account.", "correct": false }
    ]
  },
  {
    "id": 331,
    "question": "Which command can be used to load data into an internal stage?",
    "options": [
      { "label": "A", "text": "LOAD", "correct": false },
      { "label": "B", "text": "COPY", "correct": false },
      { "label": "C", "text": "GET", "correct": false },
      { "label": "D", "text": "PUT", "correct": true }
    ]
  },
  {
    "id": 332,
    "question": "What is the MINIMUM Snowflake edition required to use the periodic rekeying of micro-partitions?",
    "options": [
      { "label": "A", "text": "Enterprise", "correct": true },
      { "label": "B", "text": "Business Critical", "correct": false },
      { "label": "C", "text": "Standard", "correct": false },
      { "label": "D", "text": "Virtual Private Snowflake", "correct": false }
    ]
  },
  {
    "id": 333,
    "question": "Which stage type can be altered and dropped?",
    "options": [
      { "label": "A", "text": "Database stage", "correct": false },
      { "label": "B", "text": "External stage", "correct": true },
      { "label": "C", "text": "Table stage", "correct": false },
      { "label": "D", "text": "User stage", "correct": false }
    ]
  },
  {
    "id": 334,
    "question": "Which Snowflake object enables loading data from files as soon as they are available in a cloud storage location?",
    "options": [
      { "label": "A", "text": "Pipe", "correct": true },
      { "label": "B", "text": "External stage", "correct": false },
      { "label": "C", "text": "Task", "correct": false },
      { "label": "D", "text": "Stream", "correct": false }
    ]
  },
  {
    "id": 335,
    "question": "A user is loading JSON documents composed of a huge array containing multiple records into Snowflake. The user enables the STRIP_OUTER_ARRAY file format option. What does it do?",
    "options": [
      { "label": "A", "text": "It removes the last element of the outer array.", "correct": false },
      { "label": "B", "text": "It removes the outer array structure and loads the records into separate table rows.", "correct": true },
      { "label": "C", "text": "It removes the trailing spaces in the last element of the outer array and loads the records into separate table columns.", "correct": false },
      { "label": "D", "text": "It removes the NULL elements from the JSON object, eliminating invalid data, and enables the ability to load the records.", "correct": false }
    ]
  },
  {
    "id": 336,
    "question": "Which of the following describes how multiple Snowflake accounts in a single organization relate to various cloud providers?",
    "options": [
      { "label": "A", "text": "Each Snowflake account can be hosted in a different cloud vendor and region.", "correct": true },
      { "label": "B", "text": "Each Snowflake account must be hosted in a different cloud vendor and region.", "correct": false },
      { "label": "C", "text": "All Snowflake accounts must be hosted in the same cloud vendor and region.", "correct": false },
      { "label": "D", "text": "Each Snowflake account can be hosted in a different cloud vendor, but must be in the same region.", "correct": false }
    ]
  },
  {
    "id": 337,
    "question": "If a Snowflake user decides a table should be clustered, what should be used as the cluster key?",
    "options": [
      { "label": "A", "text": "The columns that are queried in the select clause.", "correct": false },
      { "label": "B", "text": "The columns with very high cardinality.", "correct": false },
      { "label": "C", "text": "The columns with many different values.", "correct": false },
      { "label": "D", "text": "The columns most actively used in the select filters.", "correct": true }
    ]
  },
  {
    "id": 338,
    "question": "What are value types that a VARIANT column can store? (Choose two.)",
    "options": [
      { "label": "A", "text": "STRUCT", "correct": false },
      { "label": "B", "text": "OBJECT", "correct": true },
      { "label": "C", "text": "BINARY", "correct": false },
      { "label": "D", "text": "ARRAY", "correct": true },
      { "label": "E", "text": "CLOB", "correct": false }
    ]
  },
  {
    "id": 339,
    "question": "A company needs to read multiple terabytes of data for an initial load as part of a Snowflake migration. The company can control the number and size of CSV extract files. How does Snowflake recommend maximizing the load performance?",
    "options": [
      { "label": "A", "text": "Use auto-ingest Snowpipes to load large files in a serverless model.", "correct": false },
      { "label": "B", "text": "Produce the largest files possible, reducing the overall number of files to process.", "correct": false },
      { "label": "C", "text": "Produce a larger number of smaller files and process the ingestion with size Small virtual warehouses.", "correct": true },
      { "label": "D", "text": "Use an external tool to issue batched row-by-row inserts within BEGIN TRANSACTION and COMMIT commands.", "correct": false }
    ]
  },
  {
    "id": 340,
    "question": "For non-materialized views, what column in Information Schema and Account Usage identifies whether a view is secure or not?",
    "options": [
      { "label": "A", "text": "CHECK_OPTION", "correct": false },
      { "label": "B", "text": "IS_SECURE", "correct": true },
      { "label": "C", "text": "IS_UPDATEABLE", "correct": false },
      { "label": "D", "text": "TABLE_NAME", "correct": false }
    ]
  },
  {
    "id": 341,
    "question": "The bulk data load history that is available upon completion of the COPY statement is stored where and for how long?",
    "options": [
      { "label": "A", "text": "In the metadata of the target table for 14 days", "correct": true },
      { "label": "B", "text": "In the metadata of the pipe for 14 days", "correct": false },
      { "label": "C", "text": "In the metadata of the target table for 64 days", "correct": false },
      { "label": "D", "text": "In the metadata of the pipe for 64 days", "correct": false }
    ]
  },
  {
    "id": 342,
    "question": "User INQUISITIVE_PERSON has been granted the role DATA_SCIENCE. The role DATA_SCIENCE has privileges OWNERSHIP on the schema MARKETING of the database ANALYTICS_DW. Which command will show all privileges granted to that schema?",
    "options": [
      { "label": "A", "text": "SHOW GRANTS ON ROLE DATA_SCIENCE", "correct": false },
      { "label": "B", "text": "SHOW GRANTS ON SCHEMA ANALYTICS_DW.MARKETING", "correct": true },
      { "label": "C", "text": "SHOW GRANTS TO USER INQUISITIVE_PERSON", "correct": false },
      { "label": "D", "text": "SHOW GRANTS OF ROLE DATA_SCIENCE", "correct": false }
    ]
  },
  {
    "id": 343,
    "question": "Which of the following are characteristics of security in Snowflake?",
    "options": [
      { "label": "A", "text": "Account and user authentication is only available with the Snowflake Business Critical edition.", "correct": false },
      { "label": "B", "text": "Support for HIPAA and GDPR compliance is available for UI Snowflake editions.", "correct": false },
      { "label": "C", "text": "Periodic rekeying of encrypted data is available with the Snowflake Enterprise edition and higher", "correct": true },
      { "label": "D", "text": "Private communication to internal stages is allowed in the Snowflake Enterprise edition and higher.", "correct": false }
    ]
  },
  {
    "id": 344,
    "question": "Which of the following objects can be shared through secure data sharing?",
    "options": [
      { "label": "A", "text": "Masking policy", "correct": false },
      { "label": "B", "text": "Stored procedure", "correct": false },
      { "label": "C", "text": "Task", "correct": false },
      { "label": "D", "text": "External table", "correct": true }
    ]
  },
  {
    "id": 345,
    "question": "Which formats does Snowflake store unstructured data in? (Choose two.)",
    "options": [
      { "label": "A", "text": "GeoJSON", "correct": false },
      { "label": "B", "text": "Array", "correct": false },
      { "label": "C", "text": "XML", "correct": false },
      { "label": "D", "text": "Object", "correct": false },
      { "label": "E", "text": "BLOB", "correct": true }
    ]
  },
  {
    "id": 346,
    "question": "A user is preparing to load data from an external stage. Which practice will provide the MOST efficient loading performance?",
    "options": [
      { "label": "A", "text": "Organize files into logical paths", "correct": true },
      { "label": "B", "text": "Store the files on the external stage to ensure caching is maintained", "correct": false },
      { "label": "C", "text": "Use pattern matching for regular expression execution", "correct": false },
      { "label": "D", "text": "Load the data in one large file", "correct": false }
    ]
  },
  {
    "id": 347,
    "question": "What effect does WAIT_FOR_COMPLETION = TRUE have when running an ALTER WAREHOUSE command and changing the warehouse size?",
    "options": [
      { "label": "A", "text": "The warehouse size does not change until all queries currently running in the warehouse have completed.", "correct": false },
      { "label": "B", "text": "The warehouse size does not change until all queries currently in the warehouse queue have completed.", "correct": false },
      { "label": "C", "text": "The warehouse size does not change until the warehouse is suspended and restarted.", "correct": false },
      { "label": "D", "text": "It does not return from the command until the warehouse has finished changing its size.", "correct": true }
    ]
  },
  {
    "id": 348,
    "question": "Which of the following can be used when unloading data from Snowflake? (Choose two.)",
    "options": [
      { "label": "A", "text": "When unloading semi-structured data, it is recommended that the STRIP_OUTER_ARRAY option be used.", "correct": true },
      { "label": "B", "text": "Use the ENCODING file format option to change the encoding from the default UTF-8.", "correct": false },
      { "label": "C", "text": "The OBJECT_CONSTRUCT function can be used to convert relational data to semi-structured data.", "correct": true },
      { "label": "D", "text": "By using the SINGLE = TRUE parameter, a single file up to 5 GB in size can be exported to the storage layer.", "correct": false },
      { "label": "E", "text": "Use the PARSE_JSON function to ensure structured data will be unloaded into the VARIANT data type.", "correct": false }
    ]
  },
  {
    "id": 349,
    "question": "What data is stored in the Snowflake storage layer? (Choose two.)",
    "options": [
      { "label": "A", "text": "Snowflake parameters", "correct": false },
      { "label": "B", "text": "Micro-partitions", "correct": true },
      { "label": "C", "text": "Query history", "correct": false },
      { "label": "D", "text": "Persisted query results", "correct": true },
      { "label": "E", "text": "Standard and secure view results", "correct": false }
    ]
  },
  {
    "id": 350,
    "question": "A data provider wants to share data with a consumer who does not have a Snowflake account. The provider creates a reader account for the consumer. Based on this configuration, what is true of the reader account?",
    "options": [
      { "label": "A", "text": "The reader account will automatically use the Standard edition of Snowflake.", "correct": false },
      { "label": "B", "text": "The reader account compute will be billed to the provider account.", "correct": true },
      { "label": "C", "text": "The reader account can clone data the provider has shared, but cannot re-share it.", "correct": false },
      { "label": "D", "text": "The reader account can create a copy of the shared data using CREATE TABLE AS...", "correct": false }
    ]
  },
  {
    "id": 351,
    "question": "Which of the following activities consume virtual warehouse credits in the Snowflake environment? (Choose two.)",
    "options": [
      { "label": "A", "text": "Caching query results", "correct": false },
      { "label": "B", "text": "Running EXPLAIN and SHOW commands", "correct": false },
      { "label": "C", "text": "Cloning a database", "correct": false },
      { "label": "D", "text": "Running a custom query", "correct": true },
      { "label": "E", "text": "Running COPY commands", "correct": true }
    ]
  },
  {
    "id": 352,
    "question": "When loading data into Snowflake, the COPY command supports which of the following?",
    "options": [
      { "label": "A", "text": "Joins", "correct": false },
      { "label": "B", "text": "Filters", "correct": true },
      { "label": "C", "text": "Column reordering", "correct": false },
      { "label": "D", "text": "Aggregates", "correct": false }
    ]
  },
  {
    "id": 353,
    "question": "What is cached during a query on a virtual warehouse?",
    "options": [
      { "label": "A", "text": "All columns in a micro-partition", "correct": false },
      { "label": "B", "text": "Any columns accessed during the query", "correct": true },
      { "label": "C", "text": "The columns in the result set of the query", "correct": false },
      { "label": "D", "text": "All rows accessed during the query", "correct": false }
    ]
  },
  {
    "id": 354,
    "question": "What is the default character set used when loading CSV files into Snowflake?",
    "options": [
      { "label": "A", "text": "UTF-8", "correct": true },
      { "label": "B", "text": "UTF-16", "correct": false },
      { "label": "C", "text": "ISO 8859-1", "correct": false },
      { "label": "D", "text": "ANSI_X3.4", "correct": false }
    ]
  },
  {
    "id": 355,
    "question": "Which of the following describes external functions in Snowflake?",
    "options": [
      { "label": "A", "text": "They are a type of User-defined Function (UDF).", "correct": true },
      { "label": "B", "text": "They contain their own SQL code.", "correct": false },
      { "label": "C", "text": "They call code that is stored inside of Snowflake.", "correct": false },
      { "label": "D", "text": "They can return multiple rows for each row received.", "correct": false }
    ]
  },
  {
    "id": 356,
    "question": "Which of the following are valid methods for authenticating users for access into Snowflake? (Choose three.)",
    "options": [
      { "label": "A", "text": "SCIM", "correct": false },
      { "label": "B", "text": "Federated authentication", "correct": true },
      { "label": "C", "text": "TLS 1.2", "correct": false },
      { "label": "D", "text": "Key-pair authentication", "correct": true },
      { "label": "E", "text": "OAuth", "correct": true },
      { "label": "F", "text": "OCSP authentication", "correct": false }
    ]
  },
  {
    "id": 357,
    "question": "A user has a standard multi-cluster warehouse auto-scaling policy in place. Which condition will trigger a cluster to shut down?",
    "options": [
      { "label": "A", "text": "When after 2-3 consecutive checks the system determines that the load on the most-loaded cluster could be redistributed.", "correct": false },
      { "label": "B", "text": "When after 5-6 consecutive checks the system determines that the load on the most-loaded cluster could be redistributed.", "correct": false },
      { "label": "C", "text": "When after 5-6 consecutive checks the system determines that the load on the least-loaded cluster could be redistributed.", "correct": false },
      { "label": "D", "text": "When after 2-3 consecutive checks the system determines that the load on the least-loaded cluster could be redistributed.", "correct": true }
    ]
  },
  {
    "id": 358,
    "question": "What is the minimum Snowflake edition needed for database failover and fail-back between Snowflake accounts for business continuity and disaster recovery?",
    "options": [
      { "label": "A", "text": "Standard", "correct": false },
      { "label": "B", "text": "Enterprise", "correct": true },
      { "label": "C", "text": "Business Critical", "correct": false },
      { "label": "D", "text": "Virtual Private Snowflake", "correct": false }
    ]
  },
  {
    "id": 359,
    "question": "How would a user execute a series of SQL statements using a task?",
    "options": [
      { "label": "A", "text": "Include the SQL statements in the body of the task: CREATE TASK mytask .. AS INSERT INTO target1 SELECT .. FROM stream_s1 WHERE .. INSERT INTO target2 SELECT .. FROM stream_s1 WHERE ..", "correct": false },
      { "label": "B", "text": "A stored procedure can have only one DML statement per stored procedure invocation; therefore the user should sequence stored procedure calls in the task definition: CREATE TASK mytask .... AS call stored_proc1(); call stored_proc2();", "correct": false },
      { "label": "C", "text": "Use a stored procedure executing multiple SQL statements and invoke the stored procedure from the task: CREATE TASK mytask .... AS call stored_proc_multiple_statements_inside();", "correct": true },
      { "label": "D", "text": "Create a task for each SQL statement and chain them by having a control task call each task sequentially.", "correct": false }
    ]
  },
  {
    "id": 360,
    "question": "How many resource monitors can be assigned at the account level?",
    "options": [
      { "label": "A", "text": "1", "correct": true },
      { "label": "B", "text": "2", "correct": false },
      { "label": "C", "text": "3", "correct": false },
      { "label": "D", "text": "4", "correct": false }
    ]
  },
  {
    "id": 361,
    "question": "Data storage for individual tables can be monitored using which commands and/or objects? (Choose two.)",
    "options": [
      { "label": "A", "text": "SHOW STORAGE BY TABLE;", "correct": false },
      { "label": "B", "text": "SHOW TABLES;", "correct": true },
      { "label": "C", "text": "Information Schema -> TABLE_HISTORY", "correct": false },
      { "label": "D", "text": "Information Schema -> TABLE_FUNCTION", "correct": false },
      { "label": "E", "text": "Information Schema -> TABLE_STORAGE_METRICS", "correct": true }
    ]
  },
  {
    "id": 362,
    "question": "How would a user run a multi-cluster warehouse in maximized mode?",
    "options": [
      { "label": "A", "text": "Configure the maximum clusters setting to \"Maximum.\"", "correct": false },
      { "label": "B", "text": "Turn on the additional clusters manually after starting the warehouse.", "correct": false },
      { "label": "C", "text": "Set the minimum Clusters and maximum Clusters settings to the same value.", "correct": true },
      { "label": "D", "text": "Set the minimum clusters and maximum clusters settings to different values.", "correct": false }
    ]
  },
  {
    "id": 363,
    "question": "What internal stages are available in Snowflake? (Choose three.)",
    "options": [
      { "label": "A", "text": "Schema stage", "correct": false },
      { "label": "B", "text": "Named stage", "correct": true },
      { "label": "C", "text": "User stage", "correct": true },
      { "label": "D", "text": "Stream stage", "correct": false },
      { "label": "E", "text": "Table stage", "correct": true },
      { "label": "F", "text": "Database stage", "correct": false }
    ]
  },
  {
    "id": 364,
    "question": "Which stages are used with the Snowflake PUT command to upload files from a local file system? (Choose three.)",
    "options": [
      { "label": "A", "text": "Schema Stage", "correct": false },
      { "label": "B", "text": "User Stage", "correct": true },
      { "label": "C", "text": "Database Stage", "correct": false },
      { "label": "D", "text": "Table Stage", "correct": true },
      { "label": "E", "text": "External Named Stage", "correct": false },
      { "label": "F", "text": "Internal Named Stage", "correct": true }
    ]
  },
  {
    "id": 365,
    "question": "Which data type can store more than one type of data structure?",
    "options": [
      { "label": "A", "text": "JSON", "correct": false },
      { "label": "B", "text": "BINARY", "correct": false },
      { "label": "C", "text": "VARCHAR", "correct": false },
      { "label": "D", "text": "VARIANT", "correct": true }
    ]
  },
  {
    "id": 366,
    "question": "User-level network policies can be created by which of the following roles? (Choose two.)",
    "options": [
      { "label": "A", "text": "ROLEADMIN", "correct": false },
      { "label": "B", "text": "ACCOUNTADMIN", "correct": true },
      { "label": "C", "text": "SYSADMIN", "correct": false },
      { "label": "D", "text": "SECURITYADMIN", "correct": true },
      { "label": "E", "text": "USERADMIN", "correct": false }
    ]
  },
  {
    "id": 367,
    "question": "What SQL command would be used to view all roles that were granted to USER1?",
    "options": [
      { "label": "A", "text": "show grants to user USER1;", "correct": true },
      { "label": "B", "text": "show grants user USER1;", "correct": false },
      { "label": "C", "text": "describe user USER1;", "correct": false },
      { "label": "D", "text": "show grants on user USER1;", "correct": false }
    ]
  },
  {
    "id": 368,
    "question": "Which ACCOUNT_USAGE views are used to evaluate the details of dynamic data masking? (Choose two.)",
    "options": [
      { "label": "A", "text": "ROLES", "correct": false },
      { "label": "B", "text": "POLICY_REFERENCES", "correct": true },
      { "label": "C", "text": "QUERY_HISTORY", "correct": false },
      { "label": "D", "text": "RESOURCE_MONITORS", "correct": false },
      { "label": "E", "text": "ACCESS_HISTORY", "correct": false },
      { "label": "F", "text": "MASKING_POLICIES", "correct": true }
    ]
  },
  {
    "id": 369,
    "question": "Which of the following are considerations when using a directory table when working with unstructured data? (Choose two.)",
    "options": [
      { "label": "A", "text": "A directory table is a separate database object.", "correct": false },
      { "label": "B", "text": "Directory tables store data file metadata.", "correct": true },
      { "label": "C", "text": "A directory table will be automatically added to a stage.", "correct": false },
      { "label": "D", "text": "Directory tables do not have their own grantable privileges.", "correct": false },
      { "label": "E", "text": "Directory table data cannot be refreshed manually.", "correct": true }
    ]
  },
  {
    "id": 370,
    "question": "The first user assigned to a new account, ACCOUNTADMIN, should create at least one additional user with which administrative privilege?",
    "options": [
      { "label": "A", "text": "USERADMIN", "correct": false },
      { "label": "B", "text": "PUBLIC", "correct": false },
      { "label": "C", "text": "ORGADMIN", "correct": false },
      { "label": "D", "text": "SYSADMIN", "correct": true }
    ]
  },
  {
    "id": 371,
    "question": "Which statement describes how Snowflake supports reader accounts?",
    "options": [
      { "label": "A", "text": "A reader account can consume data from the provider account that created it and combine it with its own data.", "correct": true },
      { "label": "B", "text": "A consumer needs to become a licensed Snowflake customer because data sharing is only supported between Snowflake accounts.", "correct": false },
      { "label": "C", "text": "The users in a reader account can query data that has been shared with the reader account and can perform DML tasks.", "correct": false },
      { "label": "D", "text": "The `SHOW MANAGED ACCOUNTS` command will view all the reader accounts that have been created for an account.", "correct": false }
    ]
  },
  {
    "id": 372,
    "question": "How does Snowflake allow a data provider with an Azure account in central Canada to share data with a data consumer on AWS in Australia?",
    "options": [
      { "label": "A", "text": "The data provider in Azure Central Canada can create a direct share to AWS Asia Pacific if they are both in the same organization.", "correct": false },
      { "label": "B", "text": "The data consumer and data provider can form a Data Exchange within the same organization to create a share from Azure Central Canada to AWS Asia Pacific.", "correct": false },
      { "label": "C", "text": "The data provider uses the GET DATA workflow in the Snowflake Data Marketplace to create a share between Azure Central Canada and AWS Asia Pacific.", "correct": false },
      { "label": "D", "text": "The data provider must replicate the database to a secondary account in AWS Asia Pacific within the same organization, then create a share to the data consumer's account.", "correct": true }
    ]
  },
  {
    "id": 373,
    "question": "Which Snowflake objects can be shared with other Snowflake accounts? (Choose three.)",
    "options": [
      { "label": "A", "text": "Schemas", "correct": false },
      { "label": "B", "text": "Roles", "correct": false },
      { "label": "C", "text": "Secure Views", "correct": true },
      { "label": "D", "text": "Stored Procedures", "correct": false },
      { "label": "E", "text": "Tables", "correct": true },
      { "label": "F", "text": "Secure User-Defined Functions (UDFs)", "correct": true }
    ]
  },
  {
    "id": 374,
    "question": "Which Snowflake feature will allow small volumes of data to continuously load into Snowflake and will incrementally make the data available for analysis?",
    "options": [
      { "label": "A", "text": "COPY INTO", "correct": false },
      { "label": "B", "text": "CREATE PIPE", "correct": true },
      { "label": "C", "text": "INSERT INTO", "correct": false },
      { "label": "D", "text": "TABLE STREAM", "correct": false }
    ]
  },
  {
    "id": 375,
    "question": "Which Snowflake partner specializes in data catalog solutions?",
    "options": [
      { "label": "A", "text": "Alation", "correct": true },
      { "label": "B", "text": "DataRobot", "correct": false },
      { "label": "C", "text": "dbt", "correct": false },
      { "label": "D", "text": "Tableau", "correct": false }
    ]
  },
  {
    "id": 376,
    "question": "Which of the following can be executed/called with Snowpipe?",
    "options": [
      { "label": "A", "text": "A User Defined Function (UDF)", "correct": false },
      { "label": "B", "text": "A stored procedure", "correct": false },
      { "label": "C", "text": "A single COPY INTO statement", "correct": true },
      { "label": "D", "text": "A single INSERT INTO statement", "correct": false }
    ]
  },
  {
    "id": 377,
    "question": "Which Snowflake objects will incur both storage and cloud compute charges? (Choose two.)",
    "options": [
      { "label": "A", "text": "Materialized view", "correct": true },
      { "label": "B", "text": "Sequence", "correct": false },
      { "label": "C", "text": "Secure view", "correct": true },
      { "label": "D", "text": "Transient table", "correct": false },
      { "label": "E", "text": "Clustered table", "correct": false }
    ]
  },
  {
    "id": 378,
    "question": "What file formats does Snowflake support for loading semi-structured data? (Choose three.)",
    "options": [
      { "label": "A", "text": "TSV", "correct": false },
      { "label": "B", "text": "JSON", "correct": true },
      { "label": "C", "text": "PDF", "correct": false },
      { "label": "D", "text": "Avro", "correct": true },
      { "label": "E", "text": "Parquet", "correct": true },
      { "label": "F", "text": "JPEG", "correct": false }
    ]
  },
  {
    "id": 379,
    "question": "Which of the following statements about data sharing are true? (Choose two.)",
    "options": [
      { "label": "A", "text": "New objects created by a Data Provider are automatically shared with existing Data Consumers and Reader Accounts.", "correct": false },
      { "label": "B", "text": "All database objects can be included in a shared database.", "correct": false },
      { "label": "C", "text": "Reader Accounts are created by Data Providers.", "correct": true },
      { "label": "D", "text": "Shared databases are read-only.", "correct": true },
      { "label": "E", "text": "Reader Accounts are charged for warehouse usage.", "correct": false }
    ]
  },
  {
    "id": 380,
    "question": "Credit charges for Snowflake virtual warehouses are calculated based on which of the following considerations? (Choose two.)",
    "options": [
      { "label": "A", "text": "The number of queries executed", "correct": false },
      { "label": "B", "text": "The number of active users assigned to the warehouse", "correct": false },
      { "label": "C", "text": "The size of the virtual warehouse", "correct": true },
      { "label": "D", "text": "The length of time the warehouse is running", "correct": true },
      { "label": "E", "text": "The duration of the queries that are executed", "correct": false }
    ]
  },
  {
    "id": 381,
    "question": "Which of the following are handled by the cloud services layer of the Snowflake architecture? (Choose two.)",
    "options": [
      { "label": "A", "text": "Query execution", "correct": false },
      { "label": "B", "text": "Data loading", "correct": false },
      { "label": "C", "text": "Time Travel data", "correct": false },
      { "label": "D", "text": "Security", "correct": true },
      { "label": "E", "text": "Authentication and access control", "correct": true }
    ]
  },
  {
    "id": 382,
    "question": "What is a responsibility of Snowflake's virtual warehouses?",
    "options": [
      { "label": "A", "text": "Infrastructure management", "correct": false },
      { "label": "B", "text": "Metadata management", "correct": false },
      { "label": "C", "text": "Query execution", "correct": true },
      { "label": "D", "text": "Query parsing and optimization", "correct": false },
      { "label": "E", "text": "Permanent storage of micro-partitions", "correct": false }
    ]
  },
  {
    "id": 383,
    "question": "What features does Snowflake Time Travel enable?",
    "options": [
      { "label": "A", "text": "Querying data-related objects that were created within the past 365 days", "correct": false },
      { "label": "B", "text": "Restoring data-related objects that have been deleted within the past 90 days", "correct": false },
      { "label": "C", "text": "Conducting point-in-time analysis for BI reporting", "correct": true },
      { "label": "D", "text": "Analyzing data usage/manipulation over all periods of time", "correct": false }
    ]
  },
  {
    "id": 384,
    "question": "Which of the following statements describes a schema in Snowflake?",
    "options": [
      { "label": "A", "text": "A logical grouping of objects that belongs to a single database", "correct": true },
      { "label": "B", "text": "A logical grouping of objects that belongs to multiple databases", "correct": false },
      { "label": "C", "text": "A named Snowflake object that includes all the information required to share a database", "correct": false },
      { "label": "D", "text": "A uniquely identified Snowflake account within a business entity", "correct": false }
    ]
  },
  {
    "id": 385,
    "question": "What is the recommended compressed file size range for continuous data loads using Snowpipe?",
    "options": [
      { "label": "A", "text": "8-16 MB", "correct": false },
      { "label": "B", "text": "16-24 MB", "correct": false },
      { "label": "C", "text": "10-99 MB", "correct": false },
      { "label": "D", "text": "100-250 MB", "correct": true }
    ]
  },
  {
    "id": 386,
    "question": "How long is Snowpipe data load history retained?",
    "options": [
      { "label": "A", "text": "As configured in the CREATE PIPE settings", "correct": false },
      { "label": "B", "text": "Until the pipe is dropped", "correct": false },
      { "label": "C", "text": "64 days", "correct": false },
      { "label": "D", "text": "14 days", "correct": true }
    ]
  },
  {
    "id": 387,
    "question": "Which application will Snowflake users need to install for Multi-Factor Authentication (MFA)?",
    "options": [
      { "label": "A", "text": "Okta Verify", "correct": false },
      { "label": "B", "text": "Duo Mobile", "correct": false },
      { "label": "C", "text": "Microsoft Authenticator", "correct": false },
      { "label": "D", "text": "Google Authenticator", "correct": true }
    ]
  },
  {
    "id": 388,
    "question": "Which URL type allows users to access unstructured data without authenticating into Snowflake?",
    "options": [
      { "label": "A", "text": "Pre-signed URL", "correct": true },
      { "label": "B", "text": "Scoped URL", "correct": false },
      { "label": "C", "text": "Signed URL", "correct": false },
      { "label": "D", "text": "File URL", "correct": false }
    ]
  },
  {
    "id": 389,
    "question": "Where would a Snowflake user find information about query activity from 90 days ago?",
    "options": [
      { "label": "A", "text": "account_usage.query_history view", "correct": true },
      { "label": "B", "text": "account_usage.query_history_archive view", "correct": false },
      { "label": "C", "text": "information_schema.query_history view", "correct": false },
      { "label": "D", "text": "information_schema.query_history_by_session view", "correct": false }
    ]
  },
  {
    "id": 390,
    "question": "Which statement will grant the ability to change a warehouse size?",
    "options": [
      { "label": "A", "text": "ALLOW RESIZE ON WAREHOUSE MKTG_WH TO USER MKTG_LEAD;", "correct": false },
      { "label": "B", "text": "GRANT MODIFY ON WAREHOUSE MKTG_WH TO ROLE MARKETING;", "correct": true },
      { "label": "C", "text": "GRANT MODIFY ON WAREHOUSE MKTG_WH TO USER MKTG_LEAD;", "correct": false },
      { "label": "D", "text": "GRANT OPERATE ON WAREHOUSE MKTG_WH TO ROLE MARKET;", "correct": false }
    ]
  },
  {
    "id": 391,
    "question": "Which of the following commands cannot be used within a reader account?",
    "options": [
      { "label": "A", "text": "CREATE SHARE", "correct": false },
      { "label": "B", "text": "ALTER WAREHOUSE", "correct": true },
      { "label": "C", "text": "DROP ROLE", "correct": true },
      { "label": "D", "text": "SHOW SCHEMAS", "correct": false },
      { "label": "E", "text": "DESCRIBE TABLE", "correct": false }
    ]
  },
  {
    "id": 392,
    "question": "Which TABLE function helps convert semi-structured data to a relational representation?",
    "options": [
      { "label": "A", "text": "CHECK_JSON", "correct": false },
      { "label": "B", "text": "TO_JSON", "correct": false },
      { "label": "C", "text": "FLATTEN", "correct": true },
      { "label": "D", "text": "PARSE_JSON", "correct": false }
    ]
  },
  {
    "id": 393,
    "question": "Which query profile statistics help determine if efficient pruning is occurring? (Choose two.)",
    "options": [
      { "label": "A", "text": "Bytes sent over network", "correct": false },
      { "label": "B", "text": "Percentage scanned from cache", "correct": false },
      { "label": "C", "text": "Partitions total", "correct": true },
      { "label": "D", "text": "Bytes spilled to local storage", "correct": false },
      { "label": "E", "text": "Partitions scanned", "correct": true }
    ]
  },
  {
    "id": 394,
    "question": "What are the default Time Travel and Fail-safe retention periods for transient tables?",
    "options": [
      { "label": "A", "text": "Time Travel - 1 day, Fail-safe - 1 day", "correct": false },
      { "label": "B", "text": "Time Travel - 0 days, Fail-safe - 1 day", "correct": false },
      { "label": "C", "text": "Time Travel - 1 day, Fail-safe - 0 days", "correct": true },
      { "label": "D", "text": "Transient tables are retained in neither Fail-safe nor Time Travel.", "correct": false }
    ]
  },
  {
    "id": 395,
    "question": "Which command is used to unload data from a Snowflake table into a file in a stage?",
    "options": [
      { "label": "A", "text": "COPY INTO", "correct": true },
      { "label": "B", "text": "GET", "correct": false },
      { "label": "C", "text": "WRITE", "correct": false },
      { "label": "D", "text": "EXTRACT INTO", "correct": false }
    ]
  },
  {
    "id": 396,
    "question": "What are advantages clones have over tables created with CREATE TABLE AS SELECT? (Choose two.)",
    "options": [
      { "label": "A", "text": "The clone always stays in sync with the original table.", "correct": false },
      { "label": "B", "text": "The clone has better query performance.", "correct": false },
      { "label": "C", "text": "The clone is created almost instantly.", "correct": true },
      { "label": "D", "text": "The clone will have time travel history from the original table.", "correct": true },
      { "label": "E", "text": "The clone saves space by not duplicating storage.", "correct": true }
    ]
  },
  {
    "id": 397,
    "question": "How often are the Account and Table master keys automatically rotated by Snowflake?",
    "options": [
      { "label": "A", "text": "30 Days", "correct": false },
      { "label": "B", "text": "60 Days", "correct": false },
      { "label": "C", "text": "90 Days", "correct": true },
      { "label": "D", "text": "365 Days", "correct": false }
    ]
  },
  {
    "id": 398,
    "question": "Which privilege is required for a role to be able to resume a suspended warehouse if auto-resume is not enabled?",
    "options": [
      { "label": "A", "text": "USAGE", "correct": false },
      { "label": "B", "text": "OPERATE", "correct": true },
      { "label": "C", "text": "MONITOR", "correct": false },
      { "label": "D", "text": "MODIFY", "correct": false }
    ]
  },
  {
    "id": 399,
    "question": "Which statement MOST accurately describes clustering in Snowflake?",
    "options": [
      { "label": "A", "text": "The database ACCOUNTADMIN must define the clustering methodology for each Snowflake table.", "correct": false },
      { "label": "B", "text": "Clustering is the way data is grouped together and stored within Snowflake micro-partitions.", "correct": true },
      { "label": "C", "text": "The clustering key must be included in the COPY command when loading data into Snowflake.", "correct": false },
      { "label": "D", "text": "Clustering can be disabled within a Snowflake account.", "correct": false }
    ]
  },
  {
    "id": 400,
    "question": "Which of the following practices are recommended when creating a user in Snowflake? (Choose two.)",
    "options": [
      { "label": "A", "text": "Configure the user to be initially disabled.", "correct": false },
      { "label": "B", "text": "Force an immediate password change.", "correct": true },
      { "label": "C", "text": "Set a default role for the user.", "correct": true },
      { "label": "D", "text": "Set the number of minutes to unlock to 15 minutes.", "correct": false },
      { "label": "E", "text": "Set the user's access to expire within a specified timeframe.", "correct": false }
    ]
  },
  {
    "id": 401,
    "question": "Network policies can be applied to which of the following Snowflake objects? (Choose two.)",
    "options": [
      { "label": "A", "text": "Roles", "correct": false },
      { "label": "B", "text": "Databases", "correct": false },
      { "label": "C", "text": "Warehouses", "correct": true },
      { "label": "D", "text": "Users", "correct": true },
      { "label": "E", "text": "Accounts", "correct": true }
    ]
  },
  {
    "id": 402,
    "question": "Where is Snowflake metadata stored?",
    "options": [
      { "label": "A", "text": "Within the data files", "correct": false },
      { "label": "B", "text": "In the virtual warehouse layer", "correct": false },
      { "label": "C", "text": "In the cloud services layer", "correct": true },
      { "label": "D", "text": "In the remote storage layer", "correct": false }
    ]
  },
  {
    "id": 403,
    "question": "What columns are returned when performing a FLATTEN command on semi-structured data? (Choose two.)",
    "options": [
      { "label": "A", "text": "KEY", "correct": true },
      { "label": "B", "text": "NODE", "correct": false },
      { "label": "C", "text": "VALUE", "correct": true },
      { "label": "D", "text": "LEVEL", "correct": false },
      { "label": "E", "text": "ROOT", "correct": false }
    ]
  },
  {
    "id": 404,
    "question": "Which of the following Snowflake features provide continuous data protection automatically? (Choose two.)",
    "options": [
      { "label": "A", "text": "Internal stages", "correct": false },
      { "label": "B", "text": "Incremental backups", "correct": false },
      { "label": "C", "text": "Time Travel", "correct": true },
      { "label": "D", "text": "Zero-copy clones", "correct": false },
      { "label": "E", "text": "Fail-safe", "correct": true }
    ]
  },
  {
    "id": 405,
    "question": "Will a table owner be able to modify a table to read the masked data?",
    "options": [
      { "label": "A", "text": "Yes, because a table owner has full control and can unset masking policies.", "correct": false },
      { "label": "B", "text": "Yes, because masking policies only apply to cloned tables.", "correct": false },
      { "label": "C", "text": "No, because masking policies must always reference specific access roles.", "correct": false },
      { "label": "D", "text": "No, because ownership of a table does not include the ability to change masking policies.", "correct": true }
    ]
  },
  {
    "id": 406,
    "question": "How should a virtual warehouse be configured if a user wants to ensure that additional multi-clusters are resumed with no delay?",
    "options": [
      { "label": "A", "text": "Configure the warehouse to a size larger than generally required", "correct": false },
      { "label": "B", "text": "Set the minimum and maximum clusters to autoscale", "correct": false },
      { "label": "C", "text": "Use the standard warehouse scaling policy", "correct": true },
      { "label": "D", "text": "Use the economy warehouse scaling policy", "correct": false }
    ]
  },
  {
    "id": 407,
    "question": "Which parameter controls the maximum length of time a warehouse will hold a query for processing?",
    "options": [
      { "label": "A", "text": "STATEMENT_TIMEOUT_IN_SECONDS", "correct": true },
      { "label": "B", "text": "STATEMENT_QUEUED_TIMEOUT_IN_SECONDS", "correct": false },
      { "label": "C", "text": "MAX_CONCURRENCY_LEVEL", "correct": false },
      { "label": "D", "text": "QUERY_TIMEOUT_IN_SECONDS", "correct": false }
    ]
  },
  {
    "id": 408,
    "question": "Which SQL command should be used to delete files from a Snowflake internal stage?",
    "options": [
      { "label": "A", "text": "PURGE", "correct": false },
      { "label": "B", "text": "MODIFY", "correct": false },
      { "label": "C", "text": "REMOVE", "correct": true },
      { "label": "D", "text": "DELETE", "correct": false }
    ]
  },
  {
    "id": 409,
    "question": "In a Snowflake role hierarchy, what is the top-level role?",
    "options": [
      { "label": "A", "text": "SYSADMIN", "correct": false },
      { "label": "B", "text": "ORGADMIN", "correct": false },
      { "label": "C", "text": "ACCOUNTADMIN", "correct": true },
      { "label": "D", "text": "SECURITYADMIN", "correct": false }
    ]
  },
  {
    "id": 410,
    "question": "By default, which Snowflake role is required to create a share?",
    "options": [
      { "label": "A", "text": "ORGADMIN", "correct": false },
      { "label": "B", "text": "SECURITYADMIN", "correct": false },
      { "label": "C", "text": "SHAREADMIN", "correct": false },
      { "label": "D", "text": "ACCOUNTADMIN", "correct": true }
    ]
  },
  {
    "id": 411,
    "question": "What happens to historical data when the retention period for an object ends?",
    "options": [
      { "label": "A", "text": "The data is cloned into a historical object.", "correct": false },
      { "label": "B", "text": "The data moves to Fail-safe.", "correct": true },
      { "label": "C", "text": "Time Travel on the historical data is dropped.", "correct": false },
      { "label": "D", "text": "The object containing the historical data is dropped.", "correct": false }
    ]
  },
  {
    "id": 412,
    "question": "Which query will return Snowflake logins within the last 90 days?",
    "options": [
      { "label": "A", "text": "SELECT LAST_SUCCESS_LOGIN, LOGIN_NAME FROM ACCOUNT_USAGE.USERS;", "correct": false },
      { "label": "B", "text": "SELECT EVENT_TIMESTAMP, USER_NAME FROM table(information_schema.login_history_by_user());", "correct": false },
      { "label": "C", "text": "SELECT EVENT_TIMESTAMP, USER_NAME FROM ACCOUNT_USAGE.ACCESS_HISTORY;", "correct": false },
      { "label": "D", "text": "SELECT EVENT_TIMESTAMP, USER_NAME FROM ACCOUNT_USAGE.LOGIN_HISTORY;", "correct": true }
    ]
  },
  {
    "id": 413,
    "question": "What are common issues found by using the Query Profile? (Choose two.)",
    "options": [
      { "label": "A", "text": "Identifying queries that will likely run very slowly before executing them", "correct": false },
      { "label": "B", "text": "Locating queries that consume a high amount of credits", "correct": true },
      { "label": "C", "text": "Identifying logical issues with the queries", "correct": false },
      { "label": "D", "text": "Identifying inefficient micro-partition pruning", "correct": true },
      { "label": "E", "text": "Data spilling to a local or remote disk", "correct": true }
    ]
  },
  {
    "id": 414,
    "question": "The Snowflake Search Optimization Services supports improved performance of which kind of query?",
    "options": [
      { "label": "A", "text": "Queries against large tables where frequent DML occurs", "correct": false },
      { "label": "B", "text": "Queries against tables larger than 1 TB", "correct": false },
      { "label": "C", "text": "Selective point lookup queries", "correct": true },
      { "label": "D", "text": "Queries against a subset of columns in a table", "correct": false }
    ]
  },
  {
    "id": 415,
    "question": "Which file formats are supported for unloading data from Snowflake? (Choose two.)",
    "options": [
      { "label": "A", "text": "Avro", "correct": false },
      { "label": "B", "text": "JSON", "correct": true },
      { "label": "C", "text": "ORC", "correct": false },
      { "label": "D", "text": "XML", "correct": false },
      { "label": "E", "text": "Delimited (CSV, TSV, etc.)", "correct": true }
    ]
  },
  {
    "id": 416,
    "question": "Which Snowflake tool would be BEST to troubleshoot network connectivity?",
    "options": [
      { "label": "A", "text": "SnowCLI", "correct": false },
      { "label": "B", "text": "SnowUI", "correct": false },
      { "label": "C", "text": "SnowSQL", "correct": true },
      { "label": "D", "text": "SnowCD", "correct": false }
    ]
  },
  {
    "id": 417,
    "question": "Increasing the size of a virtual warehouse from an X-Small to an X-Large is an example of which of the following?",
    "options": [
      { "label": "A", "text": "Right sizing", "correct": false },
      { "label": "B", "text": "Concurrent sizing", "correct": false },
      { "label": "C", "text": "Scaling out", "correct": false },
      { "label": "D", "text": "Scaling up", "correct": true }
    ]
  },
  {
    "id": 418,
    "question": "What are ways to create and manage data shares in Snowflake? (Choose two.)",
    "options": [
      { "label": "A", "text": "Through the Snowflake web interface (UI)", "correct": true },
      { "label": "B", "text": "Through the DATA_SHARE=TRUE parameter", "correct": false },
      { "label": "C", "text": "Through SQL commands", "correct": true },
      { "label": "D", "text": "Through the ENABLE_SHARE=TRUE parameter", "correct": false },
      { "label": "E", "text": "Using the CREATE SHARE AS SELECT * FROM TABLE command", "correct": false }
    ]
  },
  {
    "id": 419,
    "question": "What is a characteristic of data micro-partitioning in Snowflake?",
    "options": [
      { "label": "A", "text": "Micro-partitioning may introduce data skew", "correct": false },
      { "label": "B", "text": "Micro-partitioning requires the definition of a partitioning schema", "correct": false },
      { "label": "C", "text": "Micro-partitioning happens when the data is loaded", "correct": true },
      { "label": "D", "text": "Micro-partitioning can be disabled within a Snowflake account", "correct": false }
    ]
  },
  {
    "id": 420,
    "question": "Users with the ACCOUNTADMIN role can execute which of the following commands on existing users?",
    "options": [
      { "label": "A", "text": "Can SHOW users, DESCRIBE a given user, or ALTER or DROP a user", "correct": true },
      { "label": "B", "text": "Can DEFINE users, DESCRIBE a given user, or ALTER or DELETE a user", "correct": false },
      { "label": "C", "text": "Can SHOW users, INDEX a given user, or ALTER or DELETE a user", "correct": false },
      { "label": "D", "text": "Can SHOW users, DEFINE a given user or ALTER, DROP, or MODIFY a user", "correct": false }
    ]
  },
  {
    "id": 421,
    "question": "According to Snowflake best practice recommendations, which system-defined roles should be used to create custom roles? (Choose two.)",
    "options": [
      { "label": "A", "text": "ACCOUNTADMIN", "correct": false },
      { "label": "B", "text": "SYSADMIN", "correct": true },
      { "label": "C", "text": "SECURITYADMIN", "correct": true },
      { "label": "D", "text": "USERADMIN", "correct": false },
      { "label": "E", "text": "ORGADMIN", "correct": false }
    ]
  },
  {
    "id": 422,
    "question": "What services are provided by the cloud services layer in Snowflake? (Choose two.)",
    "options": [
      { "label": "A", "text": "Metadata management", "correct": true },
      { "label": "B", "text": "Object authorization", "correct": false },
      { "label": "C", "text": "Authentication", "correct": true },
      { "label": "D", "text": "Query execution", "correct": false },
      { "label": "E", "text": "Result caching", "correct": false }
    ]
  },
  {
    "id": 423,
    "question": "Which of the following commands are valid options for the VALIDATION_MODE parameter within the Snowflake COPY_INTO command? (Choose two.)",
    "options": [
      { "label": "A", "text": "TRUE", "correct": false },
      { "label": "B", "text": "RETURN_ERROR_SUM", "correct": false },
      { "label": "C", "text": "RETURN_ALL_ERRORS", "correct": true },
      { "label": "D", "text": "RETURN__ROWS", "correct": false },
      { "label": "E", "text": "RETURN_FIRST__ERRORS", "correct": false }
    ]
  },
  {
    "id": 424,
    "question": "Snowflake virtual warehouses are part of which layer of the Snowflake architecture?",
    "options": [
      { "label": "A", "text": "Compute layer", "correct": true },
      { "label": "B", "text": "Storage layer", "correct": false },
      { "label": "C", "text": "Database layer", "correct": false },
      { "label": "D", "text": "Cloud services layer", "correct": false }
    ]
  },
  {
    "id": 425,
    "question": "Which of the following are characteristics of schemas used in Snowflake? (Choose two.)",
    "options": [
      { "label": "A", "text": "A schema may contain one or more databases.", "correct": false },
      { "label": "B", "text": "A database may contain one or more schemas.", "correct": true },
      { "label": "C", "text": "A schema represents a logical grouping of database objects.", "correct": true },
      { "label": "D", "text": "Each schema is contained within a virtual warehouse.", "correct": false },
      { "label": "E", "text": "A table can span more than one schema.", "correct": false }
    ]
  },
  {
    "id": 426,
    "question": "Which Snowflake objects can be used to reduce data storage costs for short-lived tables? (Choose two.)",
    "options": [
      { "label": "A", "text": "Provisional tables", "correct": false },
      { "label": "B", "text": "Temporary tables", "correct": true },
      { "label": "C", "text": "Transient tables", "correct": true },
      { "label": "D", "text": "Permanent tables", "correct": false },
      { "label": "E", "text": "Lookup tables", "correct": false }
    ]
  },
  {
    "id": 427,
    "question": "A user has unloaded data from Snowflake to a stage. Which SQL command should be used to validate which data was loaded into the stage?",
    "options": [
      { "label": "A", "text": "LIST @file_stage", "correct": true },
      { "label": "B", "text": "SHOW @file_stage", "correct": false },
      { "label": "C", "text": "VIEW @file_stage", "correct": false },
      { "label": "D", "text": "VERIFY @file_stage", "correct": false }
    ]
  },
  {
    "id": 428,
    "question": "What are benefits of using the ACCESS_HISTORY view in the SNOWFLAKE database?",
    "options": [
      { "label": "A", "text": "Identification of unused data", "correct": false },
      { "label": "B", "text": "Identification of which roles have been used", "correct": false },
      { "label": "C", "text": "Tracking of network policy usage", "correct": false },
      { "label": "D", "text": "Highlighting of row access policy usage", "correct": false },
      { "label": "E", "text": "Identification of who has read data", "correct": true }
    ]
  },
  {
    "id": 429,
    "question": "Which of the following view types are available in Snowflake? (Choose two.)",
    "options": [
      { "label": "A", "text": "Layered view", "correct": false },
      { "label": "B", "text": "Secure view", "correct": true },
      { "label": "C", "text": "External view", "correct": false },
      { "label": "D", "text": "Embedded view", "correct": false },
      { "label": "E", "text": "Materialized view", "correct": true }
    ]
  },
  {
    "id": 430,
    "question": "Which of the following statements describes a benefit of Snowflake's separation of compute and storage? (Choose two.)",
    "options": [
      { "label": "A", "text": "Growth of storage and compute are tightly coupled.", "correct": false },
      { "label": "B", "text": "Storage expands without the requirement to add more compute.", "correct": true },
      { "label": "C", "text": "Compute can be scaled up or down without the requirement to add more storage.", "correct": true },
      { "label": "D", "text": "Compute and storage can be scaled together.", "correct": false },
      { "label": "E", "text": "Use of storage avoids disk spilling.", "correct": false }
    ]
  },
  {
    "id": 431,
    "question": "Which of the following languages can be used to implement Snowflake User Defined Functions (UDFs)? (Choose two.)",
    "options": [
      { "label": "A", "text": "Ruby", "correct": false },
      { "label": "B", "text": "Javascript", "correct": true },
      { "label": "C", "text": "SQL", "correct": true },
      { "label": "D", "text": "PERL", "correct": false },
      { "label": "E", "text": "C#", "correct": false }
    ]
  },
  {
    "id": 432,
    "question": "What is the default compression type when unloading data from Snowflake?",
    "options": [
      { "label": "A", "text": "Brotli", "correct": false },
      { "label": "B", "text": "bzip2", "correct": false },
      { "label": "C", "text": "Zstandard", "correct": false },
      { "label": "D", "text": "gzip", "correct": true }
    ]
  },
  {
    "id": 433,
    "question": "Which statement describes when a virtual warehouse can be resized?",
    "options": [
      { "label": "A", "text": "A resize will affect running, queued, and new queries.", "correct": false },
      { "label": "B", "text": "A resize can only be completed when the warehouse is in an auto-resume status.", "correct": false },
      { "label": "C", "text": "A resize must be completed when the warehouse is suspended.", "correct": false },
      { "label": "D", "text": "A resize can be completed at any time.", "correct": true }
    ]
  },
  {
    "id": 434,
    "question": "What is the compressed size limit for semi-structured data loaded into a VARIANT data type using the COPY command?",
    "options": [
      { "label": "A", "text": "8 MB", "correct": false },
      { "label": "B", "text": "16 MB", "correct": true },
      { "label": "C", "text": "32 MB", "correct": false },
      { "label": "D", "text": "64 MB", "correct": false }
    ]
  },
  {
    "id": 435,
    "question": "How should the missing tables be restored after User A cloned a schema and overwrote User B's schema?",
    "options": [
      { "label": "A", "text": "Use an UNDROP TABLE statement.", "correct": false },
      { "label": "B", "text": "Use a CREATE TABLE AS SELECT statement", "correct": false },
      { "label": "C", "text": "Rename the cloned schema and use an UNDROP SCHEMA statement.", "correct": true },
      { "label": "D", "text": "Contact Snowflake Support to retrieve the data from Fail-safe", "correct": false }
    ]
  },
  {
    "id": 436,
    "question": "How does Snowflake recommend handling the bulk loading of data batches from files already available in cloud storage?",
    "options": [
      { "label": "A", "text": "Use Snowpipe.", "correct": false },
      { "label": "B", "text": "Use the INSERT command.", "correct": false },
      { "label": "C", "text": "Use an external table.", "correct": false },
      { "label": "D", "text": "Use the COPY command.", "correct": true }
    ]
  },
  {
    "id": 437,
    "question": "What is Snowflake's general guideline for files used to load data?",
    "options": [
      { "label": "A", "text": "Files can be loaded directly into a table.", "correct": false },
      { "label": "B", "text": "Any delimiter is supported: the default is a semicolon.", "correct": false },
      { "label": "C", "text": "Electronic Data Interchange (EDI) is one of the supported semi-structured formats.", "correct": false },
      { "label": "D", "text": "For delimited files, the default character set is UTF-8.", "correct": true }
    ]
  },
  {
    "id": 438,
    "question": "How does a Snowflake user execute an anonymous block of code?",
    "options": [
      { "label": "A", "text": "The user must run the CALL command to execute the block.", "correct": false },
      { "label": "B", "text": "The statements that define the block must also execute the block.", "correct": true },
      { "label": "C", "text": "The SUBMIT command must run immediately after the block is defined.", "correct": false },
      { "label": "D", "text": "The block must be saved to a worksheet and executed using a connector.", "correct": false }
    ]
  },
  {
    "id": 439,
    "question": "When unloading data from Snowflake, the user executes a COPY INTO command into an internal stage. What additional command is required to load the file onto the local file system?",
    "options": [
      { "label": "A", "text": "GET", "correct": true },
      { "label": "B", "text": "LIST", "correct": false },
      { "label": "C", "text": "PUT", "correct": false },
      { "label": "D", "text": "REMOVE", "correct": false }
    ]
  },
  {
    "id": 440,
    "question": "A Snowflake user has a query that is running for a long time. When the user opens the query profiler, it indicates that a lot of data is spilling to disk. What is causing this to happen?",
    "options": [
      { "label": "A", "text": "The result cache is almost full and is unable to hold the results.", "correct": false },
      { "label": "B", "text": "The cloud storage staging area is not sufficient to hold the data results.", "correct": false },
      { "label": "C", "text": "Clustering has not been applied to the table so the table is not optimized.", "correct": false },
      { "label": "D", "text": "The warehouse memory is not sufficient to hold the intermediate query results.", "correct": true }
    ]
  },
  {
    "id": 441,
    "question": "What is the MOST performant file format for loading data in Snowflake?",
    "options": [
      { "label": "A", "text": "CSV (Unzipped)", "correct": false },
      { "label": "B", "text": "Parquet", "correct": true },
      { "label": "C", "text": "CSV (Gzipped)", "correct": false },
      { "label": "D", "text": "ORC", "correct": false }
    ]
  },
  {
    "id": 442,
    "question": "Which chart type does Snowsight support to visualize worksheet data?",
    "options": [
      { "label": "A", "text": "Box plot", "correct": false },
      { "label": "B", "text": "Bubble chart", "correct": false },
      { "label": "C", "text": "Pie chart", "correct": true },
      { "label": "D", "text": "Scatterplot", "correct": false }
    ]
  },
  {
    "id": 443,
    "question": "Which result shows efficient pruning?",
    "options": [
      { "label": "A", "text": "Partitions scanned is greater than partitions total.", "correct": false },
      { "label": "B", "text": "Partitions scanned is less than partitions total.", "correct": true },
      { "label": "C", "text": "Partitions scanned is equal to the partitions total.", "correct": false },
      { "label": "D", "text": "Partitions scanned is greater than or equal to the partitions total.", "correct": false }
    ]
  },
  {
    "id": 444,
    "question": "Which clustering indicator will show if a large table in Snowflake will benefit from explicitly defining a clustering key?",
    "options": [
      { "label": "A", "text": "Percentage", "correct": false },
      { "label": "B", "text": "Depth", "correct": true },
      { "label": "C", "text": "Ratio", "correct": false },
      { "label": "D", "text": "Total partition count", "correct": false }
    ]
  },
  {
    "id": 445,
    "question": "Which file format is MOST performant in Snowflake for data loading?",
    "options": [
      { "label": "A", "text": "Parquet", "correct": true },
      { "label": "B", "text": "CSV", "correct": false },
      { "label": "C", "text": "ORC", "correct": false },
      { "label": "D", "text": "Avro", "correct": false }
    ]
  },
  {
    "id": 446,
    "question": "What is to be expected when sharing worksheets in Snowsight?",
    "options": [
      { "label": "A", "text": "Worksheets can be shared with users that are internal or external to any organization.", "correct": false },
      { "label": "B", "text": "To run a shared worksheet, a user must be granted the role used for the worksheet session context.", "correct": true },
      { "label": "C", "text": "Snowsight allows users to view and refresh results but not to edit shared worksheets.", "correct": false },
      { "label": "D", "text": "Snowsight offers different sharing permissions at the worksheet, folder, and dashboard level.", "correct": false }
    ]
  },
  {
    "id": 447,
    "question": "Which Snowflake objects track DML changes made to tables, like inserts, updates, and deletes?",
    "options": [
      { "label": "A", "text": "Pipes", "correct": false },
      { "label": "B", "text": "Streams", "correct": true },
      { "label": "C", "text": "Tasks", "correct": false },
      { "label": "D", "text": "Procedures", "correct": false }
    ]
  },
  {
    "id": 448,
    "question": "Which table type is automatically deleted after a session is closed and has no Fail-safe or Time Travel cost?",
    "options": [
      { "label": "A", "text": "Temporary", "correct": true },
      { "label": "B", "text": "Transient", "correct": false },
      { "label": "C", "text": "Permanent", "correct": false },
      { "label": "D", "text": "External", "correct": false }
    ]
  },
  {
    "id": 449,
    "question": "Which constraint type is enforced in Snowflake from the ANSI SQL standard?",
    "options": [
      { "label": "A", "text": "UNIQUE", "correct": false },
      { "label": "B", "text": "PRIMARY KEY", "correct": false },
      { "label": "C", "text": "FOREIGN KEY", "correct": false },
      { "label": "D", "text": "NOT NULL", "correct": true }
    ]
  },
  {
    "id": 450,
    "question": "Which function is used to profile warehouse credit usage?",
    "options": [
      { "label": "A", "text": "AUTOMATIC_CLUSTERING_HISTORY", "correct": false },
      { "label": "B", "text": "MATERIALIZED_VIEW_REFRESH_HISTORY", "correct": false },
      { "label": "C", "text": "WAREHOUSE_LOAD_HISTORY", "correct": false },
      { "label": "D", "text": "WAREHOUSE_METERING_HISTORY", "correct": true }
    ]
  },
  {
    "id": 451,
    "question": "What is a characteristic of the Snowflake query profiler?",
    "options": [
      { "label": "A", "text": "It can provide statistics on a maximum number of 100 queries per week.", "correct": false },
      { "label": "B", "text": "It provides a graphic representation of the main components of the query processing.", "correct": true },
      { "label": "C", "text": "It provides detailed statistics about which queries are using the greatest number of compute resources.", "correct": false },
      { "label": "D", "text": "It can be used by third-party software using the query profiler API.", "correct": false }
    ]
  },
  {
    "id": 452,
    "question": "A Snowflake user wants to share transactional data with retail suppliers. However, some of the suppliers do not use Snowflake. According to best practice, what should the Snowflake user do? (Choose two.)",
    "options": [
      { "label": "A", "text": "Provide each non-Snowflake supplier with their own reader account.", "correct": true },
      { "label": "B", "text": "Deploy a single reader account to be shared by all of the non-Snowflake suppliers.", "correct": false },
      { "label": "C", "text": "Create an ETL pipeline that uses select and insert statements from the source to the target supplier accounts.", "correct": false },
      { "label": "D", "text": "Use a data share for suppliers in the same cloud region and a replicated proxy share for other cloud deployments.", "correct": false },
      { "label": "E", "text": "Extract the shared transactional data to an external stage and use cloud storage utilities to reload the suppliers' regions.", "correct": true }
    ]
  },
  {
    "id": 453,
    "question": "Which statement about data sharing is true?",
    "options": [
      { "label": "A", "text": "Accounts can share with other accounts regardless of their Snowflake edition, without requiring help from Snowflake Support.", "correct": false },
      { "label": "B", "text": "Data sharing can cross regions, but not cloud providers.", "correct": false },
      { "label": "C", "text": "The Data Consumer can only see objects in the Data Provider's source database that have been explicitly added to the share.", "correct": true },
      { "label": "D", "text": "A Data Provider can only share with other Snowflake customers.", "correct": false }
    ]
  },
  {
    "id": 454,
    "question": "Which command is used to load files into an internal stage within Snowflake?",
    "options": [
      { "label": "A", "text": "PUT", "correct": true },
      { "label": "B", "text": "COPY INTO", "correct": false },
      { "label": "C", "text": "TRANSFER", "correct": false },
      { "label": "D", "text": "INSERT", "correct": false }
    ]
  },
  {
    "id": 455,
    "question": "Which object type is granted permissions for reading a table?",
    "options": [
      { "label": "A", "text": "User", "correct": false },
      { "label": "B", "text": "Role", "correct": true },
      { "label": "C", "text": "Attribute", "correct": false },
      { "label": "D", "text": "Schema", "correct": false }
    ]
  },
  {
    "id": 456,
    "question": "What is the default value in the Snowflake Web Interface (UI) for auto suspending a Virtual Warehouse?",
    "options": [
      { "label": "A", "text": "1 minute", "correct": false },
      { "label": "B", "text": "5 minutes", "correct": false },
      { "label": "C", "text": "10 minutes", "correct": true },
      { "label": "D", "text": "15 minutes", "correct": false }
    ]
  },
  {
    "id": 457,
    "question": "Several users are using the same virtual warehouse. The users report that the queries are running slowly, and that many queries are being queued. What is the recommended way to resolve this issue?",
    "options": [
      { "label": "A", "text": "Reduce the warehouse STATEMENT_QUEUED_TIMEOUT_IN_SECONDS parameter.", "correct": false },
      { "label": "B", "text": "Reduce the warehouse AUTO_SUSPEND parameter.", "correct": false },
      { "label": "C", "text": "Increase the warehouse MAX_CONCURRENCY_LIMIT parameter.", "correct": false },
      { "label": "D", "text": "Increase the warehouse MAX_CLUSTER_COUNT parameter.", "correct": true }
    ]
  },
  {
    "id": 458,
    "question": "Which data types are valid in Snowflake? (Choose two.)",
    "options": [
      { "label": "A", "text": "BLOB", "correct": false },
      { "label": "B", "text": "Geography", "correct": true },
      { "label": "C", "text": "JSON", "correct": false },
      { "label": "D", "text": "CLOB", "correct": false },
      { "label": "E", "text": "Variant", "correct": true }
    ]
  },
  {
    "id": 459,
    "question": "What happens when the size of a virtual warehouse is changed?",
    "options": [
      { "label": "A", "text": "Queries that are running on the current warehouse configuration are not impacted.", "correct": true },
      { "label": "B", "text": "Queries that are running on the current warehouse configuration are aborted and have to be resubmitted by the user.", "correct": false },
      { "label": "C", "text": "Queries that are running on the current warehouse configuration are aborted and are automatically resubmitted.", "correct": false },
      { "label": "D", "text": "Queries that are running on the current warehouse configuration are moved to the new configuration and finished there.", "correct": false }
    ]
  },
  {
    "id": 460,
    "question": "How often are encryption keys automatically rotated by Snowflake?",
    "options": [
      { "label": "A", "text": "30 Days", "correct": false },
      { "label": "B", "text": "60 Days", "correct": false },
      { "label": "C", "text": "90 Days", "correct": true },
      { "label": "D", "text": "365 Days", "correct": false }
    ]
  },
  {
    "id": 461,
    "question": "As a best practice, all custom roles should be granted to which system-defined role?",
    "options": [
      { "label": "A", "text": "ACCOUNTADMIN", "correct": false },
      { "label": "B", "text": "ORGADMIN", "correct": false },
      { "label": "C", "text": "SECURITYADMIN", "correct": false },
      { "label": "D", "text": "SYSADMIN", "correct": true }
    ]
  },
  {
    "id": 462,
    "question": "Which Snowflake object can be accessed in the FROM clause of a query, returning a set of rows having one or more columns?",
    "options": [
      { "label": "A", "text": "A User-Defined Table Function (UDTF)", "correct": true },
      { "label": "B", "text": "A Scalar User Defined Function (UDF)", "correct": false },
      { "label": "C", "text": "A stored procedure", "correct": false },
      { "label": "D", "text": "A task", "correct": false }
    ]
  },
  {
    "id": 463,
    "question": "How are micro-partitions typically generated in Snowflake?",
    "options": [
      { "label": "A", "text": "Automatically", "correct": true },
      { "label": "B", "text": "ORDER BY <>;", "correct": false },
      { "label": "C", "text": "PARTITION BY <>;", "correct": false },
      { "label": "D", "text": "GROUP BY <>;", "correct": false }
    ]
  },
  {
    "id": 464,
    "question": "What does Snowflake recommend regarding database object ownership? (Choose two.)",
    "options": [
      { "label": "A", "text": "Create objects with ACCOUNTADMIN and do not reassign ownership.", "correct": false },
      { "label": "B", "text": "Create objects with SYSADMIN.", "correct": true },
      { "label": "C", "text": "Create objects with SECURITYADMIN to ease granting of privileges later.", "correct": false },
      { "label": "D", "text": "Create objects with a custom role and grant this role to SYSADMIN.", "correct": true },
      { "label": "E", "text": "Use only managed access schemas for objects owned by ACCOUNTADMIN.", "correct": false }
    ]
  },
  {
    "id": 465,
    "question": "Other than ownership what privileges does a user need to view and modify resource monitors in Snowflake? (Choose two.)",
    "options": [
      { "label": "A", "text": "ALTER", "correct": false },
      { "label": "B", "text": "MONITOR", "correct": true },
      { "label": "C", "text": "MODIFY", "correct": true },
      { "label": "D", "text": "CREATE", "correct": false },
      { "label": "E", "text": "DROP", "correct": false }
    ]
  },
  {
    "id": 466,
    "question": "What technique does Snowflake recommend for determining which virtual warehouse size to select?",
    "options": [
      { "label": "A", "text": "Always start with an X-Small and increase the size if the query does not complete in 2 minutes", "correct": false },
      { "label": "B", "text": "Experiment by running the same queries against warehouses of different sizes", "correct": true },
      { "label": "C", "text": "Use the default size Snowflake chooses", "correct": false },
      { "label": "D", "text": "Use X-Large or above for tables larger than 1 GB", "correct": false }
    ]
  },
  {
    "id": 467,
    "question": "Which command should be used when loading many flat files into a single table?",
    "options": [
      { "label": "A", "text": "PUT", "correct": false },
      { "label": "B", "text": "INSERT", "correct": false },
      { "label": "C", "text": "COPY INTO", "correct": true },
      { "label": "D", "text": "MERGE", "correct": false }
    ]
  },
  {
    "id": 468,
    "question": "How can a Snowflake user share data with another user who does not have a Snowflake account?",
    "options": [
      { "label": "A", "text": "Share the data by implementing User-Defined Functions (UDFs)", "correct": false },
      { "label": "B", "text": "Create a reader account and create a share of the data", "correct": true },
      { "label": "C", "text": "Grant the READER privilege to the database that is going to be shared", "correct": false },
      { "label": "D", "text": "Move the Snowflake account to a region where data sharing is enabled", "correct": false }
    ]
  },
  {
    "id": 469,
    "question": "Which semi-structured data formats can be loaded into Snowflake with a COPY command? (Choose two.)",
    "options": [
      { "label": "A", "text": "CSV", "correct": false },
      { "label": "B", "text": "EDI", "correct": false },
      { "label": "C", "text": "HTML", "correct": false },
      { "label": "D", "text": "ORC", "correct": true },
      { "label": "E", "text": "XML", "correct": true }
    ]
  },
  {
    "id": 470,
    "question": "Which statements reflect valid commands when using secondary roles? (Choose two.)",
    "options": [
      { "label": "A", "text": "USE SECONDARY ROLES RESUME", "correct": false },
      { "label": "B", "text": "USE SECONDARY ROLES SUSPEND", "correct": false },
      { "label": "C", "text": "USE SECONDARY ROLES ALL", "correct": true },
      { "label": "D", "text": "USE SECONDARY ROLES ADD", "correct": false },
      { "label": "E", "text": "USE SECONDARY ROLES NONE", "correct": true }
    ]
  },
  {
    "id": 471,
    "question": "How long is a query visible in the Query History page in the Snowflake Web Interface (UI)?",
    "options": [
      { "label": "A", "text": "60 minutes", "correct": false },
      { "label": "B", "text": "24 hours", "correct": false },
      { "label": "C", "text": "14 days", "correct": true },
      { "label": "D", "text": "30 days", "correct": false }
    ]
  },
  {
    "id": 472,
    "question": "Two users share a virtual warehouse named WH_DEV_01. When one of the users loads data, the other one experiences performance issues while querying data. How does Snowflake recommend resolving this issue?",
    "options": [
      { "label": "A", "text": "Scale up the existing warehouse", "correct": false },
      { "label": "B", "text": "Create separate warehouses for each user", "correct": false },
      { "label": "C", "text": "Create separate warehouses for each workload", "correct": true },
      { "label": "D", "text": "Stop loading and querying data at the same time", "correct": false }
    ]
  },
  {
    "id": 473,
    "question": "Which feature of a stored procedure in Snowflake?",
    "options": [
      { "label": "A", "text": "They can be created as secure and hide the underlying metadata from all users.", "correct": false },
      { "label": "B", "text": "They can only access tables from a single database.", "correct": false },
      { "label": "C", "text": "They can only contain a single SQL statement.", "correct": false },
      { "label": "D", "text": "They can be created to run with a caller's rights or an owner's rights.", "correct": true }
    ]
  },
  {
    "id": 474,
    "question": "Which view will return users who have queried a table?",
    "options": [
      { "label": "A", "text": "SNOWFLAKE.ACCOUNT_USAGE.WAREHOUSE_EVENT_HISTORY", "correct": false },
      { "label": "B", "text": "SNOWFLAKE.ACCOUNT_USAGE.ACCESS_HISTORY", "correct": true },
      { "label": "C", "text": "SNOWFLAKE.ACCOUNT_USAGE.COLUMNS", "correct": false },
      { "label": "D", "text": "SNOWFLAKE.ACCOUNT_USAGE.OBJECT_DEPENDENCIES", "correct": false }
    ]
  },
  {
    "id": 475,
    "question": "Why do Snowflake's virtual warehouses have scaling policies?",
    "options": [
      { "label": "A", "text": "To help save extra storage costs", "correct": false },
      { "label": "B", "text": "To help increase the performance of serverless computing features", "correct": false },
      { "label": "C", "text": "To help control the credits consumed by a multi-cluster warehouse running in auto-scale mode", "correct": true },
      { "label": "D", "text": "To help control the credits consumed by a multi-cluster warehouse running in maximized mode", "correct": false }
    ]
  },
  {
    "id": 476,
    "question": "Where can a Snowflake user find the query history in Snowsight?",
    "options": [
      { "label": "A", "text": "Admin", "correct": false },
      { "label": "B", "text": "Activity", "correct": true },
      { "label": "C", "text": "Dashboards", "correct": false },
      { "label": "D", "text": "Data", "correct": false }
    ]
  },
  {
    "id": 477,
    "question": "What is SnowSQL?",
    "options": [
      { "label": "A", "text": "Snowflake's new user interface where users can visualize data into charts and dashboards.", "correct": false },
      { "label": "B", "text": "Snowflake's proprietary extension of the ANSI SQL standard, including built-in keywords and system functions.", "correct": false },
      { "label": "C", "text": "Snowflake's command line client built on the Python connector which is used to connect to Snowflake and execute SQL.", "correct": true },
      { "label": "D", "text": "Snowflake's library that provides a programming interface for processing data on Snowflake without moving it to the system where the application code runs.", "correct": false }
    ]
  },
  {
    "id": 478,
    "question": "Which statement is true of zero-copy cloning?",
    "options": [
      { "label": "A", "text": "It increases storage costs as cloning a table requires storing its data twice", "correct": false },
      { "label": "B", "text": "A cloned table includes the load history of the original source", "correct": false },
      { "label": "C", "text": "It is licensed as an additional Snowflake feature", "correct": false },
      { "label": "D", "text": "All micro-partitions between the original and cloned tables are fully shared", "correct": true }
    ]
  },
  {
    "id": 479,
    "question": "A Snowflake user has been granted the CREATE DATA EXCHANGE LISTING privilege with their role. Which tasks can this user now perform on the Data Exchange? (Choose two.)",
    "options": [
      { "label": "A", "text": "Rename listings", "correct": false },
      { "label": "B", "text": "Delete provider profiles", "correct": false },
      { "label": "C", "text": "Modify listing properties", "correct": true },
      { "label": "D", "text": "Modify incoming listing access requests", "correct": false },
      { "label": "E", "text": "Submit listings for approval/publishing", "correct": true }
    ]
  },
  {
    "id": 480,
    "question": "Which parameter prevents streams on tables from becoming stale?",
    "options": [
      { "label": "A", "text": "MAX_DATA_EXTENSION_TIME_IN_DAYS", "correct": false },
      { "label": "B", "text": "MIN_DATA_RETENSION_TIME_IN_DAYS", "correct": false },
      { "label": "C", "text": "LOCK_TIMEOUT", "correct": false },
      { "label": "D", "text": "STALE_AFTER", "correct": true }
    ]
  },
  {
    "id": 481,
    "question": "If a virtual warehouse runs for 30 seconds after it is provisioned, how many seconds will the customer be billed for?",
    "options": [
      { "label": "A", "text": "30 seconds", "correct": false },
      { "label": "B", "text": "60 seconds", "correct": true },
      { "label": "C", "text": "121 seconds", "correct": false },
      { "label": "D", "text": "1 hour", "correct": false }
    ]
  },
  {
    "id": 482,
    "question": "When should a stored procedure be created with caller's rights?",
    "options": [
      { "label": "A", "text": "When the caller needs to be prevented from viewing the source code of the stored procedure", "correct": false },
      { "label": "B", "text": "When the caller needs to run a statement that could not execute outside of the stored procedure", "correct": false },
      { "label": "C", "text": "When the stored procedure needs to run with the privileges of the role that called the stored procedure", "correct": true },
      { "label": "D", "text": "When the stored procedure needs to operate on objects that the caller does not have privileges on", "correct": false }
    ]
  },
  {
    "id": 483,
    "question": "What JavaScript delimiters are available in Snowflake stored procedures? (Choose two.)",
    "options": [
      { "label": "A", "text": "Double quotes (\")", "correct": false },
      { "label": "B", "text": "Single quote (')", "correct": false },
      { "label": "C", "text": "Double forward slash (//)", "correct": false },
      { "label": "D", "text": "Double backslash (\\)", "correct": false },
      { "label": "E", "text": "Double dollar sign ($$)", "correct": true }
    ]
  },
  {
    "id": 484,
    "question": "What type of function can be used to estimate the approximate number of distinct values from a table that has trillions of rows?",
    "options": [
      { "label": "A", "text": "MD5", "correct": false },
      { "label": "B", "text": "Window", "correct": false },
      { "label": "C", "text": "External", "correct": false },
      { "label": "D", "text": "HyperLogLog (HLL)", "correct": true }
    ]
  },
  {
    "id": 485,
    "question": "Which Data Definition Language (DDL) commands are supported by Snowflake to manage tags? (Choose two.)",
    "options": [
      { "label": "A", "text": "ALTER TAG", "correct": true },
      { "label": "B", "text": "DESCRIBE TAG", "correct": false },
      { "label": "C", "text": "DROP TAG", "correct": true },
      { "label": "D", "text": "GRANT ... TO TAG", "correct": false },
      { "label": "E", "text": "GRANT TAG", "correct": false }
    ]
  },
  {
    "id": 486,
    "question": "Which Snowflake objects can be added to a share? (Choose two.)",
    "options": [
      { "label": "A", "text": "Views", "correct": false },
      { "label": "B", "text": "Tables", "correct": true },
      { "label": "C", "text": "Stored procedures", "correct": false },
      { "label": "D", "text": "Streams", "correct": false },
      { "label": "E", "text": "Secure views", "correct": true }
    ]
  },
  {
    "id": 487,
    "question": "A Query Profile shows a UnionAll operator with an extra Aggregate operator on top. What does this signify?",
    "options": [
      { "label": "A", "text": "Exploding joins", "correct": false },
      { "label": "B", "text": "Inefficient pruning", "correct": false },
      { "label": "C", "text": "UNION without ALL", "correct": true },
      { "label": "D", "text": "Queries that are too large to fit in memory", "correct": false }
    ]
  },
  {
    "id": 488,
    "question": "Which data governance control has Snowflake embedded in the application?",
    "options": [
      { "label": "A", "text": "Network policies", "correct": false },
      { "label": "B", "text": "Credit computation", "correct": false },
      { "label": "C", "text": "Data storage", "correct": false },
      { "label": "D", "text": "Attribute-based access control", "correct": true }
    ]
  },
  {
    "id": 489,
    "question": "What actions does the use of the PUT command do automatically? (Choose two.)",
    "options": [
      { "label": "A", "text": "It creates a file format object.", "correct": false },
      { "label": "B", "text": "It uses the last stage created.", "correct": false },
      { "label": "C", "text": "It compresses all files using GZIP.", "correct": true },
      { "label": "D", "text": "It encrypts the file data in transit.", "correct": true },
      { "label": "E", "text": "It creates an empty target table.", "correct": false }
    ]
  },
  {
    "id": 490,
    "question": "Which command should a Snowflake user execute to load data into a table?",
    "options": [
      { "label": "A", "text": "copy into mytable purge_mode = TRUE;", "correct": false },
      { "label": "B", "text": "copy into mytable from @my_int_stage;", "correct": true },
      { "label": "C", "text": "copy into mytable file_format = (format_name);", "correct": false },
      { "label": "D", "text": "copy into mytable validation = 'RETURN_ERRORS';", "correct": false }
    ]
  },
  {
    "id": 491,
    "question": "Which function returns the URL of a stage using the stage name as the input?",
    "options": [
      { "label": "A", "text": "BUILD_STAGE_FILE_URL", "correct": false },
      { "label": "B", "text": "BUILD_SCOPED_FILE_URL", "correct": false },
      { "label": "C", "text": "GET_PRESIGNED_URL", "correct": false },
      { "label": "D", "text": "GET_STAGE_LOCATION", "correct": true }
    ]
  },
  {
    "id": 492,
    "question": "What is the MAXIMUM number of clusters that can be provisioned with a multi-cluster virtual warehouse?",
    "options": [
      { "label": "A", "text": "1", "correct": false },
      { "label": "B", "text": "5", "correct": false },
      { "label": "C", "text": "10", "correct": true },
      { "label": "D", "text": "100", "correct": false }
    ]
  },
  {
    "id": 493,
    "question": "Which Snowflake table supports unstructured data?",
    "options": [
      { "label": "A", "text": "Directory", "correct": true },
      { "label": "B", "text": "Transient", "correct": false },
      { "label": "C", "text": "Temporary", "correct": false },
      { "label": "D", "text": "Permanent", "correct": false }
    ]
  },
  {
    "id": 494,
    "question": "When unloading data, which file format preserves the data values for floating-point number columns?",
    "options": [
      { "label": "A", "text": "Avro", "correct": false },
      { "label": "B", "text": "CSV", "correct": false },
      { "label": "C", "text": "JSON", "correct": true },
      { "label": "D", "text": "Parquet", "correct": false }
    ]
  },
  {
    "id": 495,
    "question": "Which virtual warehouse privilege is required to view a load-monitoring chart?",
    "options": [
      { "label": "A", "text": "MONITOR", "correct": true },
      { "label": "B", "text": "MODIFY", "correct": false },
      { "label": "C", "text": "OPERATE", "correct": false },
      { "label": "D", "text": "USAGE", "correct": false }
    ]
  },
  {
    "id": 496,
    "question": "Which use case will always cause an exploding join in Snowflake?",
    "options": [
      { "label": "A", "text": "A query that has more than 10 left outer joins.", "correct": false },
      { "label": "B", "text": "A query that is using a UNION without an ALL.", "correct": false },
      { "label": "C", "text": "A query that has not specified join criteria for tables.", "correct": true },
      { "label": "D", "text": "A query that has requested too many columns of data.", "correct": false }
    ]
  },
  {
    "id": 497,
    "question": "How many resource monitors can be applied to a single virtual warehouse?",
    "options": [
      { "label": "A", "text": "Zero", "correct": false },
      { "label": "B", "text": "One", "correct": true },
      { "label": "C", "text": "Eight", "correct": false },
      { "label": "D", "text": "Unlimited", "correct": false }
    ]
  },
  {
    "id": 498,
    "question": "What are the main differences between the account usage views and the information schema views? (Choose two.)",
    "options": [
      { "label": "A", "text": "No active warehouse is needed to query account usage views but one is needed to query information schema views.", "correct": false },
      { "label": "B", "text": "Account usage views do not contain data about tables but information schema views do.", "correct": false },
      { "label": "C", "text": "Account usage views contain dropped objects but information schema views do not.", "correct": true },
      { "label": "D", "text": "Data retention for account usage views is 1 year but is 7 days to 6 months for information schema views, depending on the view.", "correct": true },
      { "label": "E", "text": "Information schema views are read-only but account usage views are not.", "correct": false }
    ]
  },
  {
    "id": 499,
    "question": "Which file function provides a URL with access to a file on a stage without the need for authentication and authorization?",
    "options": [
      { "label": "A", "text": "GET_RELATIVE_PATH", "correct": false },
      { "label": "B", "text": "GET_PRESIGNED_URL", "correct": false },
      { "label": "C", "text": "BUILD_STAGE_FILE_URL", "correct": false },
      { "label": "D", "text": "BUILD_SCOPED_FILE_URL", "correct": true }
    ]
  },
  {
    "id": 500,
    "question": "Which parameter controls the maximum length of time a warehouse will hold a query for processing?",
    "options": [
      { "label": "A", "text": "STATEMENT_TIMEOUT_IN_SECONDS", "correct": true },
      { "label": "B", "text": "STATEMENT_QUEUED_TIMEOUT_IN_SECONDS", "correct": false },
      { "label": "C", "text": "MAX_CONCURRENCY_LEVEL", "correct": false },
      { "label": "D", "text": "QUERY_TIMEOUT_IN_SECONDS", "correct": false }
    ]
  },
  {
    "id": 501,
    "question": "Which view can be used to determine if a table has frequent row updates or deletes?",
    "options": [
      { "label": "A", "text": "TABLES", "correct": false },
      { "label": "B", "text": "TABLE_STORAGE_METRICS", "correct": true },
      { "label": "C", "text": "STORAGE_DAILY_HISTORY", "correct": false },
      { "label": "D", "text": "STORAGE_USAGE", "correct": false }
    ]
  },
  {
    "id": 502,
    "question": "How does the Snowflake search optimization service improve query performance?",
    "options": [
      { "label": "A", "text": "It improves the performance of range searches.", "correct": false },
      { "label": "B", "text": "It defines different clustering keys on the same source table.", "correct": false },
      { "label": "C", "text": "It improves the performance of all queries running against a given table.", "correct": false },
      { "label": "D", "text": "It improves the performance of equality searches.", "correct": true }
    ]
  },
  {
    "id": 503,
    "question": "How is unstructured data retrieved from data storage?",
    "options": [
      { "label": "A", "text": "SQL functions like the GET command can be used to copy the unstructured data to a location on the client.", "correct": false },
      { "label": "B", "text": "SQL functions can be used to create different types of URLs pointing to the unstructured data. These URLs can be used to download the data to a client.", "correct": true },
      { "label": "C", "text": "SQL functions can be used to retrieve the data from the query results cache. When the query results are output to a client, the unstructured data will be output to the client as files.", "correct": false },
      { "label": "D", "text": "SQL functions can call on different web extensions designed to display different types of files as a web page. The web extensions will allow the files to be downloaded to the client.", "correct": false }
    ]
  },
  {
    "id": 504,
    "question": "What is the recommended way to obtain a cloned table with the same grants as the source table?",
    "options": [
      { "label": "A", "text": "Clone the table with the COPY GRANTS command.", "correct": true },
      { "label": "B", "text": "Use an ALTER TABLE command to copy the grants.", "correct": false },
      { "label": "C", "text": "Clone the schema then drop the unwanted tables.", "correct": false },
      { "label": "D", "text": "Create a script to extract grants and apply them to the cloned table.", "correct": false }
    ]
  },
  {
    "id": 505,
    "question": "What common query issues can be identified using the Query Profile? (Choose two.)",
    "options": [
      { "label": "A", "text": "Data classification", "correct": false },
      { "label": "B", "text": "Exploding joins", "correct": true },
      { "label": "C", "text": "Unions", "correct": false },
      { "label": "D", "text": "Inefficient pruning", "correct": true },
      { "label": "E", "text": "Data masking", "correct": false }
    ]
  },
  {
    "id": 506,
    "question": "What is used to extract the content of PDF files stored in Snowflake stages?",
    "options": [
      { "label": "A", "text": "FLATTEN function", "correct": false },
      { "label": "B", "text": "Window function", "correct": false },
      { "label": "C", "text": "HyperLogLog (HLL) function", "correct": false },
      { "label": "D", "text": "Java User-Defined Function (UDF)", "correct": true }
    ]
  },
  {
    "id": 507,
    "question": "What happens when a database is cloned?",
    "options": [
      { "label": "A", "text": "It does not retain any privileges granted on the source object.", "correct": false },
      { "label": "B", "text": "It replicates all granted privileges on the corresponding source objects.", "correct": true },
      { "label": "C", "text": "It replicates all granted privileges on the corresponding child objects.", "correct": false },
      { "label": "D", "text": "It replicates all granted privileges on the corresponding child schema objects.", "correct": false }
    ]
  },
  {
    "id": 508,
    "question": "What does a Query Profile provide in Snowflake?",
    "options": [
      { "label": "A", "text": "A multi-step query that displays each processing step in the same panel.", "correct": false },
      { "label": "B", "text": "A pre-computed data set derived from a query specification and stored for later use.", "correct": false },
      { "label": "C", "text": "A graphical representation of the main components of the processing plan for a query.", "correct": true },
      { "label": "D", "text": "A collapsible panel in the operator tree pane that lists nodes by execution time in descending order for a query.", "correct": false }
    ]
  },
  {
    "id": 509,
    "question": "When executing a COPY INTO command, performance can be negatively affected by using which optional parameter on a large number of files?",
    "options": [
      { "label": "A", "text": "FILE_FORMAT", "correct": false },
      { "label": "B", "text": "PATTERN", "correct": false },
      { "label": "C", "text": "VALIDATION_MODE", "correct": false },
      { "label": "D", "text": "FILES", "correct": true }
    ]
  },
  {
    "id": 510,
    "question": "Which URL type should be used to get a permanent URL to a file in a stage?",
    "options": [
      { "label": "A", "text": "File URL", "correct": false },
      { "label": "B", "text": "Pre-signed URL", "correct": false },
      { "label": "C", "text": "Saved URL", "correct": false },
      { "label": "D", "text": "Scoped URL", "correct": true }
    ]
  },
  {
    "id": 511,
    "question": "Which operation will produce an error in Snowflake?",
    "options": [
      { "label": "A", "text": "Inserting duplicate values into a PRIMARY KEY column", "correct": true },
      { "label": "B", "text": "Inserting a NULL into a column with a NOT NULL constraint", "correct": true },
      { "label": "C", "text": "Inserting duplicate values into a column with a UNIQUE constraint", "correct": true },
      { "label": "D", "text": "Inserting a value into a FOREIGN KEY column that does not match a value in the column referenced", "correct": true }
    ]
  },
  {
    "id": 512,
    "question": "How are URLs that access unstructured data in external stages retrieved?",
    "options": [
      { "label": "A", "text": "From the Snowsight navigation menu", "correct": false },
      { "label": "B", "text": "By querying a directory table", "correct": true },
      { "label": "C", "text": "By creating an external function", "correct": false },
      { "label": "D", "text": "By using the INFORMATION_USAGE schema", "correct": false }
    ]
  },
  {
    "id": 513,
    "question": "What is the Snowflake multi-clustering feature for virtual warehouses used for?",
    "options": [
      { "label": "A", "text": "To improve the data unloading process to the cloud", "correct": false },
      { "label": "B", "text": "To improve data loading from very large data sets", "correct": false },
      { "label": "C", "text": "To improve concurrency for users and queries", "correct": true },
      { "label": "D", "text": "To speed up slow or stalled queries", "correct": false }
    ]
  },
  {
    "id": 514,
    "question": "Which features could be used to improve the performance of queries that return a small subset of rows from a large table? (Choose two.)",
    "options": [
      { "label": "A", "text": "Search optimization service", "correct": true },
      { "label": "B", "text": "Automatic clustering", "correct": true },
      { "label": "C", "text": "Row access policies", "correct": false },
      { "label": "D", "text": "Multi-cluster virtual warehouses", "correct": false },
      { "label": "E", "text": "Secure views", "correct": false }
    ]
  },
  {
    "id": 515,
    "question": "Which command would return an empty sample?",
    "options": [
      { "label": "A", "text": "select * from testtable sample ();", "correct": false },
      { "label": "B", "text": "select * from testtable sample (0);", "correct": true },
      { "label": "C", "text": "select * from testtable sample (null);", "correct": false },
      { "label": "D", "text": "select * from testtable sample (none);", "correct": false }
    ]
  },
  {
    "id": 516,
    "question": "What Snowflake function should be used to unload relational data to JSON?",
    "options": [
      { "label": "A", "text": "BUILD_STAGE_FILE_URL()", "correct": false },
      { "label": "B", "text": "OBJECT_CONSTRUCT()", "correct": true },
      { "label": "C", "text": "PARSE_JSON()", "correct": false },
      { "label": "D", "text": "TO_VARIANT()", "correct": false }
    ]
  },
  {
    "id": 517,
    "question": "Floating point values are truncated when unloaded to which file format?",
    "options": [
      { "label": "A", "text": "ORC", "correct": false },
      { "label": "B", "text": "CSV", "correct": true },
      { "label": "C", "text": "Avro", "correct": false },
      { "label": "D", "text": "Parquet", "correct": false }
    ]
  },
  {
    "id": 518,
    "question": "Which levels can apply network policies? (Choose two.)",
    "options": [
      { "label": "A", "text": "Account", "correct": true },
      { "label": "B", "text": "Database", "correct": false },
      { "label": "C", "text": "Role", "correct": false },
      { "label": "D", "text": "Schema", "correct": false },
      { "label": "E", "text": "User", "correct": true }
    ]
  },
  {
    "id": 519,
    "question": "What causes objects in a data share to become unavailable to a consumer account?",
    "options": [
      { "label": "A", "text": "The DATA_RETENTION_IT parameter in the consumer account is set to 0.", "correct": false },
      { "label": "B", "text": "The consumer account runs the GRANT IMPORTED PRIVILEGES command on the data share every 24 hours.", "correct": false },
      { "label": "C", "text": "The objects in the data share are being deleted and the grant pattern is not re-applied systematically.", "correct": true },
      { "label": "D", "text": "The consumer account acquires the data share through a private data exchange.", "correct": false }
    ]
  },
  {
    "id": 520,
    "question": "How can an administrator check for updates (for example, SCIM API requests) sent to Snowflake by the identity provider?",
    "options": [
      { "label": "A", "text": "ACCESS_HYSTORY", "correct": false },
      { "label": "B", "text": "LOAD_HYSTORY", "correct": false },
      { "label": "C", "text": "QUERY_HISTORY", "correct": false },
      { "label": "D", "text": "REST_EVENT_HISTORY", "correct": true }
    ]
  },
  {
    "id": 521,
    "question": "A Snowflake user is writing a User-Defined Function (UDF) with some unqualified object names. How will those object names be resolved during execution?",
    "options": [
      { "label": "A", "text": "Snowflake will resolve them according to the SEARCH_PATH parameter.", "correct": true },
      { "label": "B", "text": "Snowflake will only check the schema the UDF belongs to.", "correct": false },
      { "label": "C", "text": "Snowflake will first check the current schema, and then the schema the previous query used.", "correct": false },
      { "label": "D", "text": "Snowflake will first check the current schema, and then the PUBLIC schema of the current database.", "correct": false }
    ]
  },
  {
    "id": 522,
    "question": "Why should a user select the economy scaling policy for a multi-cluster warehouse?",
    "options": [
      { "label": "A", "text": "To prevent/minimize query queuing", "correct": false },
      { "label": "B", "text": "To increase performance of the clusters", "correct": false },
      { "label": "C", "text": "To reduce queuing concurrent user queries", "correct": false },
      { "label": "D", "text": "To conserve credits by keeping running clusters fully loaded", "correct": true }
    ]
  },
  {
    "id": 523,
    "question": "What MINIMUM privilege is required on the external stage for any role in the GET REST API to access unstructured data files using a file URL?",
    "options": [
      { "label": "A", "text": "READ", "correct": true },
      { "label": "B", "text": "OWNERSHIP", "correct": false },
      { "label": "C", "text": "USAGE", "correct": false },
      { "label": "D", "text": "WRITE", "correct": false }
    ]
  },
  {
    "id": 524,
    "question": "Which view in SNOWFLAKE.ACCOUNT_USAGE shows from which IP address a user connected to Snowflake?",
    "options": [
      { "label": "A", "text": "ACCESS_HYSTORY", "correct": false },
      { "label": "B", "text": "LOGIN_HYSTORY", "correct": true },
      { "label": "C", "text": "SESSIONS", "correct": false },
      { "label": "D", "text": "QUERY_HISTORY", "correct": false }
    ]
  },
  {
    "id": 525,
    "question": "Snowflake Partner Connect is limited to users with a verified email address and which role?",
    "options": [
      { "label": "A", "text": "SYSADMIN", "correct": false },
      { "label": "B", "text": "SECURITYADMIN", "correct": false },
      { "label": "C", "text": "ACCOUNTADMIN", "correct": true },
      { "label": "D", "text": "USERADMIN", "correct": false }
    ]
  },
  {
    "id": 526,
    "question": "What unit of storage supports efficient query processing in Snowflake?",
    "options": [
      { "label": "A", "text": "Blobs", "correct": false },
      { "label": "B", "text": "JSON", "correct": false },
      { "label": "C", "text": "Block storage", "correct": false },
      { "label": "D", "text": "Micro-partitions", "correct": true }
    ]
  },
  {
    "id": 527,
    "question": "What is the difference between a stored procedure and a User-Defined Function (UDF)?",
    "options": [
      { "label": "A", "text": "Stored procedures can execute database operations while UDFs cannot.", "correct": true },
      { "label": "B", "text": "Returning a value is required in a stored procedure while returning values in a UDF is optional.", "correct": false },
      { "label": "C", "text": "Values returned by a stored procedure can be used directly in a SQL statement while the values returned by a UDF cannot.", "correct": false },
      { "label": "D", "text": "Multiple stored procedures can be called as part of a single executable statement while a single SQL statement can only call one UDF at a time.", "correct": false }
    ]
  },
  {
    "id": 528,
    "question": "Which URL type does Snowflake recommend to use when providing unstructured data to other accounts through a share?",
    "options": [
      { "label": "A", "text": "File", "correct": false },
      { "label": "B", "text": "Pre-signed", "correct": false },
      { "label": "C", "text": "Scoped", "correct": true },
      { "label": "D", "text": "Staged", "correct": false }
    ]
  },
  {
    "id": 529,
    "question": "What is the MAXIMUM Time Travel retention period for a transient table?",
    "options": [
      { "label": "A", "text": "0 days", "correct": false },
      { "label": "B", "text": "1 day", "correct": true },
      { "label": "C", "text": "7 days", "correct": false },
      { "label": "D", "text": "90 days", "correct": false }
    ]
  },
  {
    "id": 530,
    "question": "What is the advantage of using a reader account?",
    "options": [
      { "label": "A", "text": "It can be used by a client that does not have a Snowflake account.", "correct": true },
      { "label": "B", "text": "It is read-only and prevents the shared data from being updated by the provider.", "correct": false },
      { "label": "C", "text": "It can be connected to a Snowflake account in a different region.", "correct": false },
      { "label": "D", "text": "It provides limited access to the data share and is therefore cheaper for the data provider.", "correct": false }
    ]
  },
  {
    "id": 531,
    "question": "What command is used to export or unload data from Snowflake?",
    "options": [
      { "label": "A", "text": "PUT @mystage", "correct": false },
      { "label": "B", "text": "GET @mystage", "correct": false },
      { "label": "C", "text": "COPY INTO @mystage", "correct": true },
      { "label": "D", "text": "INSERT @mystage", "correct": false }
    ]
  },
  {
    "id": 532,
    "question": "A Snowflake user wants to share data with someone who does not have a Snowflake account. How can the Snowflake user share the data?",
    "options": [
      { "label": "A", "text": "Use the Snowflake Marketplace.", "correct": false },
      { "label": "B", "text": "Create a reader account.", "correct": true },
      { "label": "C", "text": "Create a consumer account.", "correct": false },
      { "label": "D", "text": "Use a Snowflake share.", "correct": false }
    ]
  },
  {
    "id": 533,
    "question": "A user wants to add additional privileges to the system-defined roles for their virtual warehouse. How does Snowflake recommend they accomplish this?",
    "options": [
      { "label": "A", "text": "Grant the additional privileges to a custom role.", "correct": true },
      { "label": "B", "text": "Grant the additional privileges to the ACCOUNTADMIN role.", "correct": false },
      { "label": "C", "text": "Grant the additional privileges to the SYSADMIN role.", "correct": false },
      { "label": "D", "text": "Grant the additional privileges to the ORGADMIN role.", "correct": false }
    ]
  },
  {
    "id": 534,
    "question": "How does Snowflake store a table's underlying data? (Choose two.)",
    "options": [
      { "label": "A", "text": "Columnar file format", "correct": true },
      { "label": "B", "text": "Micro-partitions", "correct": true },
      { "label": "C", "text": "Text file format", "correct": false },
      { "label": "D", "text": "Uncompressed", "correct": false },
      { "label": "E", "text": "User-defined partitions", "correct": false }
    ]
  },
  {
    "id": 535,
    "question": "What is the MAXIMUM number of days a Snowflake-managed encryption key can be used before it gets automatically rotated?",
    "options": [
      { "label": "A", "text": "1 day", "correct": false },
      { "label": "B", "text": "14 days", "correct": false },
      { "label": "C", "text": "30 days", "correct": true },
      { "label": "D", "text": "120 days", "correct": false }
    ]
  },
  {
    "id": 536,
    "question": "Which user object property requires contacting Snowflake Support in order to set a value for it?",
    "options": [
      { "label": "A", "text": "DISABLED", "correct": false },
      { "label": "B", "text": "MINS_TO_BYPASS MFA", "correct": true },
      { "label": "C", "text": "MINS_TO_BYPASS_NETWORK_POLICY", "correct": false },
      { "label": "D", "text": "MINS_TO_UNLOCK", "correct": false }
    ]
  },
  {
    "id": 537,
    "question": "How does Snowflake handle the bulk unloading of data into single or multiple files?",
    "options": [
      { "label": "A", "text": "It assigns each unloaded data file a unique name.", "correct": true },
      { "label": "B", "text": "It uses the PUT command to download the data by default.", "correct": false },
      { "label": "C", "text": "It uses COPY INTO for bulk unloading where the default option is SINGLE = TRUE.", "correct": false },
      { "label": "D", "text": "It uses COPY INTO to copy the data from a table into one or more files in an external stage only.", "correct": false }
    ]
  },
  {
    "id": 538,
    "question": "What information is included in the display in the Query Profile? (Choose two.)",
    "options": [
      { "label": "A", "text": "Index hints used in query", "correct": false },
      { "label": "B", "text": "Credit usage details", "correct": true },
      { "label": "C", "text": "Clustering keys details", "correct": false },
      { "label": "D", "text": "Details and statistics for the overall query", "correct": true },
      { "label": "E", "text": "Graphical representation of the query processing plan", "correct": false }
    ]
  },
  {
    "id": 539,
    "question": "A Snowflake user wants to optimize performance for a query that queries only a small number of rows in a table. The rows require significant processing. The data in the table does not change frequently. What should the user do?",
    "options": [
      { "label": "A", "text": "Add a clustering key to the table.", "correct": false },
      { "label": "B", "text": "Add the search optimization service to the table.", "correct": false },
      { "label": "C", "text": "Create a materialized view based on the query.", "correct": true },
      { "label": "D", "text": "Enable the query acceleration service for the virtual warehouse.", "correct": false }
    ]
  },
  {
    "id": 540,
    "question": "When using the ALLOW_CLIENT_MFA_CACHING parameter, how long is a cached Multi-Factor Authentication (MFA) token valid for?",
    "options": [
      { "label": "A", "text": "1 hour", "correct": false },
      { "label": "B", "text": "2 hours", "correct": false },
      { "label": "C", "text": "4 hours", "correct": true },
      { "label": "D", "text": "8 hours", "correct": false }
    ]
  },
  {
    "id": 541,
    "question": "When unloading data, which file formats are supported by the COPY INTO command? (Choose two.)",
    "options": [
      { "label": "A", "text": "Avro", "correct": false },
      { "label": "B", "text": "JSON", "correct": true },
      { "label": "C", "text": "ORC", "correct": false },
      { "label": "D", "text": "Parquet", "correct": true },
      { "label": "E", "text": "XML", "correct": false }
    ]
  },
  {
    "id": 542,
    "question": "A JSON object is loaded into a column named data using a Snowflake VARIANT datatype. The root node of the object is BIKE. The child attribute for this root node is BIKEID. Which statement will allow the user to access BIKEID?",
    "options": [
      { "label": "A", "text": "SELECT data:BIKEID", "correct": false },
      { "label": "B", "text": "SELECT data.BIKE.BIKEID", "correct": false },
      { "label": "C", "text": "SELECT data:BIKE.BIKEID", "correct": false },
      { "label": "D", "text": "SELECT data:BIKE:BIKEID", "correct": true }
    ]
  },
  {
    "id": 543,
    "question": "A custom role owns multiple tables. If this role is dropped from the system, who becomes the owner of these tables?",
    "options": [
      { "label": "A", "text": "ACCOUNTADMIN", "correct": false },
      { "label": "B", "text": "SYSADMIN", "correct": false },
      { "label": "C", "text": "Tables will be standalone or orphaned.", "correct": false },
      { "label": "D", "text": "The role that dropped the custom role.", "correct": true }
    ]
  },
  {
    "id": 544,
    "question": "Which function produces a lateral view of a VARIANT column?",
    "options": [
      { "label": "A", "text": "GET_PATH", "correct": false },
      { "label": "B", "text": "FLATTEN", "correct": true },
      { "label": "C", "text": "GET", "correct": false },
      { "label": "D", "text": "PARSE_JSON", "correct": false }
    ]
  },
  {
    "id": 545,
    "question": "Snowflake strongly recommends that all users with what type of role be required to use Multi-Factor Authentication (MFA)?",
    "options": [
      { "label": "A", "text": "USERADMIN", "correct": false },
      { "label": "B", "text": "ACCOUNTADMIN", "correct": true },
      { "label": "C", "text": "SECURITYADMIN", "correct": false },
      { "label": "D", "text": "SYSADMIN", "correct": false }
    ]
  },
  {
    "id": 546,
    "question": "What does it mean when the sample function uses the Bernoulli sampling method?",
    "options": [
      { "label": "A", "text": "The data is based on sampling every row.", "correct": true },
      { "label": "B", "text": "The data is based on sampling 10% of the source data.", "correct": false },
      { "label": "C", "text": "The data is based on sampling blocks of the source data.", "correct": false },
      { "label": "D", "text": "The data is based on sampling 1000 rows of the source data.", "correct": false }
    ]
  },
  {
    "id": 547,
    "question": "What are characteristics of Snowflake network policies? (Choose two.)",
    "options": [
      { "label": "A", "text": "They can be set for any Snowflake Edition", "correct": false },
      { "label": "B", "text": "They can be applied to roles.", "correct": true },
      { "label": "C", "text": "They restrict or enable access to specific IP addresses.", "correct": true },
      { "label": "D", "text": "They are activated using ALTER DATABASE SQL commands.", "correct": false },
      { "label": "E", "text": "They can only be managed using the ORGADMIN role.", "correct": false }
    ]
  },
  {
    "id": 548,
    "question": "Which function should be used to find the query ID of the second query executed in a current session?",
    "options": [
      { "label": "A", "text": "SELECT LAST_QUERY_ID(-2);", "correct": false },
      { "label": "B", "text": "SELECT LAST_QUERY_ID(-1);", "correct": false },
      { "label": "C", "text": "SELECT LAST_QUERY_ID(1);", "correct": false },
      { "label": "D", "text": "SELECT LAST_QUERY_ID(2);", "correct": true }
    ]
  },
  {
    "id": 549,
    "question": "How is the hierarchy of database objects organized in Snowflake?",
    "options": [
      { "label": "A", "text": "A database consists of one or more schemas. A schema contains tables and views.", "correct": true },
      { "label": "B", "text": "A schema consists of one or more databases. A database contains tables and views.", "correct": false },
      { "label": "C", "text": "A schema consists of one or more databases. A database contains tables, views, and warehouses.", "correct": false },
      { "label": "D", "text": "A database consists of one of more schemas and warehouses. A schema contains tables and views.", "correct": false }
    ]
  },
  {
    "id": 550,
    "question": "Which role can execute the SHOW ORGANIZATION ACCOUNTS command successfully?",
    "options": [
      { "label": "A", "text": "ACCOUNTADMIN", "correct": false },
      { "label": "B", "text": "SECURITYADMIN", "correct": false },
      { "label": "C", "text": "ORGADMIN", "correct": true },
      { "label": "D", "text": "USERADMIN", "correct": false }
    ]
  },
  {
    "id": 551,
    "question": "Which data types in Snowflake are synonymous for FLOAT? (Choose two.)",
    "options": [
      { "label": "A", "text": "DECIMAL", "correct": false },
      { "label": "B", "text": "DOUBLE", "correct": true },
      { "label": "C", "text": "NUMBER", "correct": false },
      { "label": "D", "text": "NUMERIC", "correct": false },
      { "label": "E", "text": "REAL", "correct": true }
    ]
  },
  {
    "id": 552,
    "question": "What ensures that a user with the role SECURITYADMIN can activate a network policy for an individual user?",
    "options": [
      { "label": "A", "text": "A role that has been granted the EXECUTE TASK privilege", "correct": false },
      { "label": "B", "text": "A role that has been granted the global ATTACH POLICY privilege", "correct": false },
      { "label": "C", "text": "Ownership privilege on only the role that created the network policy", "correct": false },
      { "label": "D", "text": "Ownership privilege on both the user and the network policy", "correct": true }
    ]
  },
  {
    "id": 553,
    "question": "Which function can be combined with the COPY command to unload a relational table into a JSON file?",
    "options": [
      { "label": "A", "text": "FLATTEN", "correct": false },
      { "label": "B", "text": "LISTAGG", "correct": false },
      { "label": "C", "text": "OBJECT_CONSTRUCT", "correct": true },
      { "label": "D", "text": "PARSE_JSON", "correct": false }
    ]
  },
  {
    "id": 554,
    "question": "A user needs to MINIMIZE the cost of large tables that are used to store transitory data. The data does not need to be protected against failures, because the data can be reconstructed outside of Snowflake. What table type should be used?",
    "options": [
      { "label": "A", "text": "Permanent", "correct": false },
      { "label": "B", "text": "Transient", "correct": false },
      { "label": "C", "text": "Temporary", "correct": true },
      { "label": "D", "text": "External", "correct": false }
    ]
  },
  {
    "id": 555,
    "question": "While loading data from a JSON file, what enables the removal of the outer array structure from the file and loads the records into separate table rows?",
    "options": [
      { "label": "A", "text": "SKIP_BYTE_ORDER_MARK", "correct": false },
      { "label": "B", "text": "STRIP_NULL_VALUE", "correct": false },
      { "label": "C", "text": "STRIP_OUTER_ARRAY", "correct": true },
      { "label": "D", "text": "STRIP_OUTER_ELEMENT", "correct": false }
    ]
  },
  {
    "id": 556,
    "question": "Which functions can be used to share unstructured data through a secure view? (Choose two.)",
    "options": [
      { "label": "A", "text": "BUILD_SCOPED_FILE_URL", "correct": true },
      { "label": "B", "text": "BUILD_STAGE_FILE_URL", "correct": false },
      { "label": "C", "text": "GET_ABSOLUTE_PATH", "correct": false },
      { "label": "D", "text": "GET_PRESIGNED_URL", "correct": true },
      { "label": "E", "text": "GET_RELATIVE_PATH", "correct": false }
    ]
  },
  {
    "id": 557,
    "question": "Which function will return a row for each object in a VARIANT, OBJECT, or ARRAY column?",
    "options": [
      { "label": "A", "text": "CAST", "correct": false },
      { "label": "B", "text": "FLATTEN", "correct": true },
      { "label": "C", "text": "GET", "correct": false },
      { "label": "D", "text": "PARSE_JSON", "correct": false }
    ]
  },
  {
    "id": 558,
    "question": "What is the MINIMUM size of a table for which Snowflake recommends considering adding a clustering key?",
    "options": [
      { "label": "A", "text": "1 Kilobyte (KB)", "correct": false },
      { "label": "B", "text": "1 Megabyte (MB)", "correct": false },
      { "label": "C", "text": "1 Gigabyte (GB)", "correct": true },
      { "label": "D", "text": "1 Terabyte (TB)", "correct": false }
    ]
  },
  {
    "id": 559,
    "question": "For the ALLOWED_VALUES tag property, what is the MAXIMUM number of possible string values for a single tag?",
    "options": [
      { "label": "A", "text": "10", "correct": false },
      { "label": "B", "text": "50", "correct": false },
      { "label": "C", "text": "64", "correct": false },
      { "label": "D", "text": "256", "correct": true }
    ]
  },
  {
    "id": 560,
    "question": "Which Snowflake table type is only visible to the user who creates it, can have the same name as permanent tables in the same schema, and is dropped at the end of the session?",
    "options": [
      { "label": "A", "text": "Temporary", "correct": true },
      { "label": "B", "text": "Local", "correct": false },
      { "label": "C", "text": "User", "correct": false },
      { "label": "D", "text": "Transient", "correct": false }
    ]
  },
  {
    "id": 561,
    "question": "What is a characteristic of a role in Snowflake?",
    "options": [
      { "label": "A", "text": "Roles cannot be granted to other roles", "correct": false },
      { "label": "B", "text": "System-defined roles can be dropped", "correct": false },
      { "label": "C", "text": "Privileges granted to system roles by Snowflake can be revoked", "correct": false },
      { "label": "D", "text": "Privileges on securable objects can be granted and revoked to a role", "correct": true }
    ]
  },
  {
    "id": 562,
    "question": "What command would a user execute to load unstructured data files into a Snowflake internal stage?",
    "options": [
      { "label": "A", "text": "PUT", "correct": true },
      { "label": "B", "text": "GET", "correct": false },
      { "label": "C", "text": "LIST", "correct": false },
      { "label": "D", "text": "COPY INTO", "correct": false }
    ]
  },
  {
    "id": 563,
    "question": "How do managed access schemas help with data governance?",
    "options": [
      { "label": "A", "text": "They log all operations and enable fine-grained auditing", "correct": false },
      { "label": "B", "text": "They provide centralized privilege management with the schema owner", "correct": true },
      { "label": "C", "text": "They enforce identical privileges across all tables and views in a schema", "correct": false },
      { "label": "D", "text": "They require the use of masking and row access policies across every table and view in the schema", "correct": false }
    ]
  },
  {
    "id": 564,
    "question": "What is the default period of time the Warehouse Activity section provides a graph of Snowsight activity?",
    "options": [
      { "label": "A", "text": "2 hours", "correct": false },
      { "label": "B", "text": "1 week", "correct": false },
      { "label": "C", "text": "2 weeks", "correct": false },
      { "label": "D", "text": "1 month", "correct": true }
    ]
  },
  {
    "id": 565,
    "question": "A Snowflake user wants to unload data from a relational table sized 5 GB using CSV. The extract needs to be as performant as possible. What should the user do?",
    "options": [
      { "label": "A", "text": "Use Parquet as the unload file format, using Parquet's default compression feature", "correct": true },
      { "label": "B", "text": "Use a regular expression in the stage specification of the COPY command to restrict parsing time", "correct": false },
      { "label": "C", "text": "Increase the default MAX_FILE_SIZE to 5 GB and set SINGLE = true to produce a single file", "correct": false },
      { "label": "D", "text": "Leave the default MAX_FILE_SIZE to 16 MB to take advantage of parallel operations", "correct": false }
    ]
  },
  {
    "id": 566,
    "question": "How is the MANAGE GRANTS privilege applied?",
    "options": [
      { "label": "A", "text": "Globally", "correct": true },
      { "label": "B", "text": "At the database level", "correct": false },
      { "label": "C", "text": "At the schema level", "correct": false },
      { "label": "D", "text": "At the table level", "correct": false }
    ]
  },
  {
    "id": 567,
    "question": "What is required for a query execution to be served from the result cache?",
    "options": [
      { "label": "A", "text": "The user is the same", "correct": false },
      { "label": "B", "text": "The SQL text is the same", "correct": true },
      { "label": "C", "text": "The SQL query profile is the same", "correct": false },
      { "label": "D", "text": "The virtual warehouse is the same", "correct": false }
    ]
  },
  {
    "id": 568,
    "question": "Which Snowflake URL type is used by directory tables?",
    "options": [
      { "label": "A", "text": "File", "correct": false },
      { "label": "B", "text": "Pre-signed", "correct": false },
      { "label": "C", "text": "Scoped", "correct": true },
      { "label": "D", "text": "Virtual-hosted style", "correct": false }
    ]
  },
  {
    "id": 569,
    "question": "At which point is data encrypted when using a PUT command?",
    "options": [
      { "label": "A", "text": "When it reaches the virtual warehouse", "correct": false },
      { "label": "B", "text": "When it gets micro-partitioned", "correct": false },
      { "label": "C", "text": "Before it is sent from the user's machine", "correct": true },
      { "label": "D", "text": "After it reaches the internal stage", "correct": false }
    ]
  },
  {
    "id": 570,
    "question": "Which privileges are required for a user to restore an object? (Choose two.)",
    "options": [
      { "label": "A", "text": "UPDATE", "correct": false },
      { "label": "B", "text": "OWNERSHIP", "correct": true },
      { "label": "C", "text": "MODIFY", "correct": false },
      { "label": "D", "text": "UNDROP", "correct": false },
      { "label": "E", "text": "CREATE", "correct": true }
    ]
  },
  {
    "id": 571,
    "question": "For a multi-cluster virtual warehouse, which parameters are used to calculate the number of credits billed? (Choose two.)",
    "options": [
      { "label": "A", "text": "Cache size", "correct": false },
      { "label": "B", "text": "Warehouse size", "correct": true },
      { "label": "C", "text": "Number of clusters", "correct": true },
      { "label": "D", "text": "Volume of data processed", "correct": false },
      { "label": "E", "text": "Number of queries executed", "correct": false }
    ]
  },
  {
    "id": 572,
    "question": "What happens when the values for both an ALLOWED_IP_LIST and a BLOCKED_IP_LIST are used in a network policy?",
    "options": [
      { "label": "A", "text": "Snowflake ignores the BLOCKED_IP_LIST first", "correct": false },
      { "label": "B", "text": "Snowflake applies the BLOCKED_IP_LIST first", "correct": true },
      { "label": "C", "text": "Snowflake applies the ALLOWED_IP_LIST first", "correct": false },
      { "label": "D", "text": "Snowflake ignores the ALLOWED_IP_LIST first", "correct": false }
    ]
  },
  {
    "id": 573,
    "question": "What does the orange bar on an operator represent when reviewing the Query Profile?",
    "options": [
      { "label": "A", "text": "A measure of progress of the operator's execution", "correct": false },
      { "label": "B", "text": "The fraction of time that this operator consumed within the query step", "correct": true },
      { "label": "C", "text": "The cost of the operator in terms of the virtual warehouse CPU utilization", "correct": false },
      { "label": "D", "text": "The fraction of data scanned from cache versus remote disk for the operator", "correct": false }
    ]
  },
  {
    "id": 574,
    "question": "When unloading data from Snowflake, what is the default file size of each file?",
    "options": [
      { "label": "A", "text": "16 MB", "correct": true },
      { "label": "B", "text": "32 MB", "correct": false },
      { "label": "C", "text": "64 MB", "correct": false },
      { "label": "D", "text": "5 GB", "correct": false }
    ]
  },
  {
    "id": 575,
    "question": "What is the abbreviated form to get all the files in the stage for the current user?",
    "options": [
      { "label": "A", "text": "LIST @~;", "correct": true },
      { "label": "B", "text": "LS @~;", "correct": false },
      { "label": "C", "text": "LS @usr;", "correct": false },
      { "label": "D", "text": "SHOW @%;", "correct": false }
    ]
  },
  {
    "id": 576,
    "question": "Which features make up Snowflake's column-level security? (Choose two.)",
    "options": [
      { "label": "A", "text": "Continuous Data Protection (CDP)", "correct": false },
      { "label": "B", "text": "Dynamic Data Masking", "correct": true },
      { "label": "C", "text": "External Tokenization", "correct": true },
      { "label": "D", "text": "Key pair authentication", "correct": false },
      { "label": "E", "text": "Row access policies", "correct": false }
    ]
  },
  {
    "id": 577,
    "question": "Which programming languages are supported for Snowflake User-Defined Functions (UDFs)? (Choose two.)",
    "options": [
      { "label": "A", "text": "C#", "correct": false },
      { "label": "B", "text": "JavaScript", "correct": true },
      { "label": "C", "text": "PHP", "correct": false },
      { "label": "D", "text": "Python", "correct": true },
      { "label": "E", "text": "TypeScript", "correct": false }
    ]
  },
  {
    "id": 578,
    "question": "What is the MAXIMUM number of days that Snowflake resets the 24-hour retention period for a query result every time the result is used?",
    "options": [
      { "label": "A", "text": "1 day", "correct": false },
      { "label": "B", "text": "10 days", "correct": false },
      { "label": "C", "text": "31 days", "correct": false },
      { "label": "D", "text": "60 days", "correct": true }
    ]
  },
  {
    "id": 579,
    "question": "There are 300 concurrent users on a production Snowflake account using a single cluster virtual warehouse. The queries are small, but the response time is very slow. What is causing this to occur?",
    "options": [
      { "label": "A", "text": "The warehouse is queuing the queries, increasing the overall query execution time", "correct": true },
      { "label": "B", "text": "The warehouse parameter STATEMENT_QUEUED_TIMEOUT_IN_SECONDS is set too low", "correct": false },
      { "label": "C", "text": "The application is not using the latest native ODBC driver, which is causing latency", "correct": false },
      { "label": "D", "text": "The queries are not taking advantage of the data cache", "correct": false }
    ]
  },
  {
    "id": 580,
    "question": "Which Snowflake edition offers the highest level of security for organizations that have the strictest requirements?",
    "options": [
      { "label": "A", "text": "Standard", "correct": false },
      { "label": "B", "text": "Enterprise", "correct": false },
      { "label": "C", "text": "Business Critical", "correct": false },
      { "label": "D", "text": "Virtual Private Snowflake (VPS)", "correct": true }
    ]
  },
  {
    "id": 581,
    "question": "What is the MAXIMUM size limit for a record of a VARIANT data type?",
    "options": [
      { "label": "A", "text": "8 MB", "correct": false },
      { "label": "B", "text": "16 MB", "correct": true },
      { "label": "C", "text": "32 MB", "correct": false },
      { "label": "D", "text": "128 MB", "correct": false }
    ]
  },
  {
    "id": 582,
    "question": "What criteria does Snowflake use to determine the current role when initiating a session? (Choose two.)",
    "options": [
      { "label": "A", "text": "If a role was specified as part of the connection and that role has been granted to the Snowflake user, the specified role becomes the current role", "correct": true },
      { "label": "B", "text": "If no role was specified as part of the connection and a default role has been defined for the Snowflake user, that role becomes the current role", "correct": true },
      { "label": "C", "text": "If no role was specified as part of the connection and a default role has not been set for the Snowflake user, the session will not be initiated and the login will fail", "correct": false },
      { "label": "D", "text": "If a role was specified as part of the connection and that role has not been granted to the Snowflake user, it will be ignored and the default role will become the current role", "correct": false },
      { "label": "E", "text": "If a role was specified as part of the connection and that role has not been granted to the Snowflake user, the role is automatically granted and it becomes the current role", "correct": false }
    ]
  },
  {
    "id": 583,
    "question": "What command should be used to move data from a Snowflake database table into one or more files in an external stage?",
    "options": [
      { "label": "A", "text": "GET", "correct": false },
      { "label": "B", "text": "COPY INTO", "correct": true },
      { "label": "C", "text": "PUT", "correct": false },
      { "label": "D", "text": "SHOW", "correct": false }
    ]
  },
  {
    "id": 584,
    "question": "How does a Snowflake user reference a directory table created on stage mystage in a SQL query?",
    "options": [
      { "label": "A", "text": "SELECT * FROM @mystage::DIRECTORY", "correct": false },
      { "label": "B", "text": "SELECT * FROM DIRECTORY (@mystage)", "correct": true },
      { "label": "C", "text": "SELECT * FROM TO_TABLE (DIRECTORY @mystage)", "correct": false },
      { "label": "D", "text": "SELECT * FROM TABLE (@mystage DIRECTORY)", "correct": false }
    ]
  },
  {
    "id": 585,
    "question": "Why would a Snowflake user create a secure view instead of a standard view?",
    "options": [
      { "label": "A", "text": "The secure view is only available to end users with the corresponding SECURE_ACCESS property", "correct": false },
      { "label": "B", "text": "End users are unable to see the view definition, and internal optimizations differ with a secure view", "correct": true },
      { "label": "C", "text": "With a secure view, the underlying data is replicated to a separate storage layer with enhanced encryption", "correct": false },
      { "label": "D", "text": "Secure views support additional functionality that is not supported for standard views, such as column masking and row-level access policies", "correct": false }
    ]
  },
  {
    "id": 586,
    "question": "Which command can be added to the COPY command to make it load all files, whether or not the load status of the files is known?",
    "options": [
      { "label": "A", "text": "FORCE = TRUE", "correct": true },
      { "label": "B", "text": "FORCE = FALSE", "correct": false },
      { "label": "C", "text": "LOAD_UNCERTAIN_FILES = TRUE", "correct": false },
      { "label": "D", "text": "LOAD_UNCERTAIN_FILES = FALSE", "correct": false }
    ]
  },
  {
    "id": 587,
    "question": "How can a Snowflake user improve long-running query performance?",
    "options": [
      { "label": "A", "text": "Reduce the virtual warehouse size", "correct": false },
      { "label": "B", "text": "Cluster the underlying table being queried", "correct": true },
      { "label": "C", "text": "Disable the result cache", "correct": false },
      { "label": "D", "text": "Add ORDER BY to the query", "correct": false }
    ]
  },
  {
    "id": 588,
    "question": "Which Snowflake feature allows administrators to identify unused data that may be archived or deleted?",
    "options": [
      { "label": "A", "text": "Access history", "correct": true },
      { "label": "B", "text": "Data classification", "correct": false },
      { "label": "C", "text": "Dynamic Data Masking", "correct": false },
      { "label": "D", "text": "Object tagging", "correct": false }
    ]
  },
  {
    "id": 589,
    "question": "Which SQL commands should be used to write a recursive query if the number of levels is unknown? (Choose two.)",
    "options": [
      { "label": "A", "text": "CONNECT BY", "correct": true },
      { "label": "B", "text": "LISTAGG", "correct": false },
      { "label": "C", "text": "MATCH RECOGNIZE", "correct": false },
      { "label": "D", "text": "QUALIFY", "correct": false },
      { "label": "E", "text": "WITH", "correct": true }
    ]
  },
  {
    "id": 590,
    "question": "What information is stored in the ACCESS_HISTORY view?",
    "options": [
      { "label": "A", "text": "History of the files that have been loaded into Snowflake", "correct": false },
      { "label": "B", "text": "Names and owners of the roles that are currently enabled in the session", "correct": false },
      { "label": "C", "text": "Query details such as the objects included and the user who executed the query", "correct": true },
      { "label": "D", "text": "Details around the privileges that have been granted for all objects in an account", "correct": false }
    ]
  },
  {
    "id": 591,
    "question": "What privilege does a user need in order to receive or request data from the Snowflake Marketplace?",
    "options": [
      { "label": "A", "text": "CREATE DATA EXCHANGE LISTING", "correct": false },
      { "label": "B", "text": "CREATE SHARE", "correct": false },
      { "label": "C", "text": "IMPORT SHARE", "correct": true },
      { "label": "D", "text": "IMPORTED PRIVILEGES", "correct": false }
    ]
  },
  {
    "id": 592,
    "question": "Which Snowflake database object can be shared with other accounts?",
    "options": [
      { "label": "A", "text": "Tasks", "correct": false },
      { "label": "B", "text": "Pipes", "correct": false },
      { "label": "C", "text": "Secure User-Defined Functions (UDFs)", "correct": true },
      { "label": "D", "text": "Stored Procedures", "correct": false }
    ]
  },
  {
    "id": 593,
    "question": "Which identity providers are valid type values for federated authentication on the SAML_IDENTITY_PROVIDER parameter? (Choose two.)",
    "options": [
      { "label": "A", "text": "Identity Access Management (IAM)", "correct": false },
      { "label": "B", "text": "Microsoft Active Directory Federation Services (AD FS)", "correct": true },
      { "label": "C", "text": "OAuth", "correct": false },
      { "label": "D", "text": "Okta", "correct": true },
      { "label": "E", "text": "PingFederate", "correct": false }
    ]
  },
  {
    "id": 594,
    "question": "A Snowflake user wants to share data using my_share with account xy12345. Which command should be used?",
    "options": [
      { "label": "A", "text": "grant usage on share my_share to account xy12345;", "correct": false },
      { "label": "B", "text": "grant select on share my_share to account xy12345;", "correct": false },
      { "label": "C", "text": "alter share my_share add accounts = xy12345;", "correct": true },
      { "label": "D", "text": "alter account xy12345 add share my_share;", "correct": false }
    ]
  },
  {
    "id": 595,
    "question": "What role is required to use Partner Connect?",
    "options": [
      { "label": "A", "text": "ACCOUNTADMIN", "correct": true },
      { "label": "B", "text": "ORGADMIN", "correct": false },
      { "label": "C", "text": "SECURITYADMIN", "correct": false },
      { "label": "D", "text": "SYSADMIN", "correct": false }
    ]
  },
  {
    "id": 596,
    "question": "How can a Snowflake user configure a virtual warehouse to support over 100 users if their company has Enterprise Edition?",
    "options": [
      { "label": "A", "text": "Add additional warehouses and configure them as a cluster", "correct": false },
      { "label": "B", "text": "Set the auto-scale to 100", "correct": false },
      { "label": "C", "text": "Use a multi-cluster warehouse", "correct": true },
      { "label": "D", "text": "Use a larger warehouse", "correct": false }
    ]
  },
  {
    "id": 597,
    "question": "How is table data compressed in Snowflake?",
    "options": [
      { "label": "A", "text": "Each column is compressed as it is stored in a micro-partition", "correct": true },
      { "label": "B", "text": "Each micro-partition is compressed as it is written into cloud storage using GZIP", "correct": false },
      { "label": "C", "text": "The micro-partitions are stored in compressed cloud storage, and the cloud storage handles compression", "correct": false },
      { "label": "D", "text": "The text data in a micro-partition is compressed with GZIP, but other types are not compressed", "correct": false }
    ]
  },
  {
    "id": 598,
    "question": "What will be the output of the below query against the table name gold_data?\nselect * from gold_data tablesample (100);",
    "options": [
      { "label": "A", "text": "It will return an empty sample", "correct": false },
      { "label": "B", "text": "It will return a random 100 rows", "correct": false },
      { "label": "C", "text": "It will return an entire table", "correct": true },
      { "label": "D", "text": "It will produce an error message", "correct": false }
    ]
  },
  {
    "id": 599,
    "question": "A Snowflake query took 40 minutes to run. The results indicate that 'Bytes spilled to local storage' was a large number. What is the issue and how can it be resolved?",
    "options": [
      { "label": "A", "text": "The warehouse is too large. Decrease the size of the warehouse to reduce the spillage", "correct": false },
      { "label": "B", "text": "The warehouse is too small. Increase the size of the warehouse to reduce the spillage", "correct": true },
      { "label": "C", "text": "The Snowflake console has timed out. Contact Snowflake Support", "correct": false },
      { "label": "D", "text": "The warehouse consists of a single cluster. Use a multi-cluster warehouse to reduce the spillage", "correct": false }
    ]
  },
  {
    "id": 600,
    "question": "Which command should be used to move data from a Snowflake database table into one or more files in an external stage?",
    "options": [
      { "label": "A", "text": "GET", "correct": false },
      { "label": "B", "text": "COPY INTO", "correct": true },
      { "label": "C", "text": "PUT", "correct": false },
      { "label": "D", "text": "SHOW", "correct": false }
    ]
  }
]

