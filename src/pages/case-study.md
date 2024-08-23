---
title: Case Study
description: Paisley Case Study
toc_min_heading_level: 2
toc_max_heading_level: 4
---

<!-- <figure className="image-container">
   <img src="/case-study/photos/Full_Infrastructure_Diagram.png" className="diagram" alt="Cerebellum Infrastructure" width="85%"/> 
   <figcaption align="center">Cerebellum's Complete Infrastructure</figcaption>
</figure>

<div className="flex flex-row multi-image-container">
   <figure className="image-container flex-1 flex-grow">
      <img src="/case-study/photos/Hard_Realtime.png" className="diagram" alt="Hard Realtime" width="60%"/>  
      <figcaption align="center">Hard Realtime</figcaption>
   </figure>
   <figure className="image-container flex-1 flex-grow">
      <img src="/case-study/photos/Soft_Realtime.png" className="diagram" alt="Soft Realtime" width="60%"/> 
      <figcaption align="center">Soft Realtime</figcaption>
   </figure>
</div>

<figure className="image-container mobile-single-image-container">
   <img src="/case-study/photos/SSE_Diagram.png" className="diagram" alt="Server-Sent Events" width="30%"/> 
   <figcaption align="center">Server-Sent Events</figcaption>
</figure>

<div className="flex justify-center video-container">
   <figure className="image-container p-4 flex flex-col scaling-gif justify-center items-center">
      <div className="flex flex-grow flex-1 bg-white items-center justify-center rounded-lg">
         <video
         src="/case-study/videos/vertical_scale_cropped.mp4"
         loop
         autoPlay
         muted
         playsInline
         className=" w-full rounded-lg"
         > 
         </video>
      </div>
      <figcaption align="center">Vertical Scaling</figcaption>
   </figure>
   <figure className="image-container p-4 flex flex-col scaling-gif justify-center items-center">
      <div className="flex flex-grow flex-1 bg-white items-center justify-center rounded-lg">
      <video
         src="/case-study/videos/horizontal_scaling_cropped.mp4"
         loop
         autoPlay
         muted
         playsInline
         className="flex-grow w-full rounded-lg"
         > 
      </video>
      </div>
      <figcaption align="center">Horizontal Scaling</figcaption>
   </figure>
</div>
 -->

## 1. Introduction
### 1.1 What is Paisley?
Paisley is an open-source Retrieval-Augmented Generation (RAG) framework designed to help IT or engineering teams quickly set up and deploy RAG chatbots with out-of-the-box best practices and tooling.

RAG is an approach for enhancing the capabilities of Large Language Models (LLMs) with an external “knowledge base” of (often proprietary) information. Using RAG, LLMs such as GPT-4 from OpenAI or Claude 3.5 Sonnet from Anthropic offer the ability for users to make queries in natural language to retrieve information from that external knowledge base.

Companies leveraging RAG benefit in terms of speed, availability, consistency, and a reduction in employee time and effort in retrieving often unstructured information. Although a basic prototype RAG chatbot can be quickly created from numerous online tutorials and open-source libraries, deploying a production-ready chatbot involves several additional steps that require knowledge, libraries, and infrastructure to realize.

Paisley was created as an open-source, configurable, “bring-your-own-cloud” alternative to the proliferation of closed-source, paid, and typically hosted RAG chatbot services. Our RAG “starter kit” enables teams with limited resources and time to skip some of the research, easily establish knowledge bases, and more quickly deploy RAG chatbots.

### 1.2 Use Case
Let’s consider a hypothetical small organization - an animal conservancy - which maintains information on wild animals in its purview, in addition to HR info, and has twenty donor relations staff. Although there may be extensive documentation available for the various animals or departments, specialists are busy and can’t always field questions. This is a common scenario where the 24-7 availability of a RAG chatbot can help staff more effectively find information without impacting other teams.

## 2. What is RAG?
Before delving into the potential solutions for setting up a RAG chatbot, it may be helpful to better understand what RAG is and the various considerations that may impact any decision. For readers who are familiar with RAG, feel free to skip this section and refer back only for clarification on terms used.

### 2.1 Basics of LLMs
LLMs are non-deterministic or “stochastic” (output to the same input can vary); they can be thought of as probabilistic predictive text engines. LLMs alone have drawbacks: knowledge cut-off date, tendency to hallucinate, no access to proprietary info.

When interacting with LLM, a user’s “Query” (a question in the form of text entered by the user) is combined with additional text, often called “Context.” A set of special instructions may then also be given as part of a “Prompt.” This Prompt is then given to the LLM and used to generate a “Response.” Examples of context include copy-pasting text or coding errors into the prompt window.

### 2.2 Basic RAG is LLM + Knowledge base
A knowledge base is loaded with textual data that the user wishes to query. The knowledge base breaks this text up into excerpts. A user’s query is first used to retrieve text excerpts (e.g., sentences or paragraphs) from the knowledge base that are relevant to the query. This information is concatenated into a long string which serves as the “Context.” A prompt is constructed using the user’s query and the retrieved context and is specifically worded to constrain the LLM's answer to information only provided in the Context (i.e., retrieved from the Knowledge base).

#### 2.2.1 How does a knowledge base work?
Most commonly, a knowledge base uses a vector database for semantic similarity search. We’ll refer to the processing of documents that are added to a knowledge base as “ingestion”:

- Documents within the knowledge base are chunked and converted to vectors in a process called embedding. Vectors and associated text chunks are stored in a database.
- Vector embeddings are a long series of numbers that represent the content. That database is optimized to take another vector as input, conduct a search of stored vectors, and return the most “similar” vectors along with their text chunks.
- Similarity is calculated according to established algorithms.
- When the user enters a query, that query is also embedded (converted to a vector) to facilitate vector search.
- How a document is chunked and embedded affects the overall performance of RAG retrieval: large chunks may lack detail, small chunks may lack semantic meaning (e.g., consider chunking by each word). Documents with different content types (e.g., tables vs. long-form text) may require entirely different chunking and embedding strategies to be effective.

### Best Practice RAG considerations
Also conducting a keyword search using the established BM25 algorithm can yield better retrieval results. The same document will need to be processed in a different way to generate an index for keyword search retrieval. Thus, managing multiple knowledge bases and managing additional retrieved context is necessary.

- Retrieved context may require filters or re-ranking to ensure the best returned results are considered; ColBERT reranking has great results.
- When submitting context to LLMs, order matters, especially with longer contexts—need to put the best context at the start and end of the context window.
- Different LLMs also perform differently depending on the content and amount of context given, and the prompt used to provide instructions. Prompt engineering is its own sub-discipline in working with LLMs.

Ultimately, the optimal configuration and combination of settings is heavily dependent upon the nature of the information, the format in which it is stored, and the queries that users may make.

#### Evaluations
The only way to know if you’ve chosen the correct combination of all the options and variables involved in setting up a chatbot is to establish “evaluations” on the performance of the retrieval and ultimate LLM response. The ability to measure the performance of RAG responses in a structured and repeatable way allows a user to determine if changes being made to the configuration are truly beneficial, and in this way, allow true improvement and optimization.

This capability also allows the performance of the RAG chatbot to be tracked over time. Given LLMs' stochastic nature, as queries or data change, the performance of the chatbot may “drift” and answers may deviate from desired responses. Without structured evaluations, users are forced to rely on manual testing and gut feeling that responses are appropriate. In general, it is important to assess both the quality of context retrieved from knowledge bases and the response from the LLM.

Common metrics that may be used:

[Need to discuss how these metrics are calculated?]

## Potential solutions
In general, there are open-source components and hosted solutions, each with its pros and cons.

### Open-source components
Many open-source components and libraries exist for the various aspects of building a RAG chatbot. The space is evolving so quickly that some libraries we reviewed were incomplete (especially Javascript/Typescript libraries) and still actively being built as of the time of writing.

LangChain and LlamaIndex are two notably popular libraries that allow you to build an infinite number of RAG configurations. These libraries are complex, and visual UI frameworks have been built to help simplify the process of constructing a RAG pipeline. In some cases, the visual UI frameworks are built on proprietary code formats, making it difficult to migrate away from the UI platform in the future.

These libraries are designed to work with several open-source and hosted infrastructure, like vector and traditional databases. For evaluations, a number of open-source libraries also exist along a spectrum of simple to complex. These were generally all distinct evaluation-specific packages that needed to be configured and set up as additional components to the RAG pipeline.

Generally, open-source libraries do not provide any support for deployment—at most, creating a localhost API endpoint for user interaction and testing. It is up to the user to provision infrastructure such as servers and databases. It is also generally up to the user to create an interface such as a web UI component.

### Hosted solutions
Many hosted solutions exist along a spectrum from simple, focused products to flexible, configurable platforms encompassing a comprehensive variety of additional features such as model fine-tuning and observability, which we will not consider.

The audience for these solutions may be as targeted as an individual who both creates the knowledge base and uses the chatbot internally. On the other end of the spectrum, the intended user audience may also be the general public who accesses an enterprise-scale chatbot for customer service or support.

Generally, these solutions are hosted on vendor infrastructure and require the user to upload information for their knowledge base. We’ll be focusing on the smaller, more targeted solutions that better suit our hypothetical small organization, rather than the enterprise platforms.

#### Mendable
For people who may be less familiar with RAG and related products, we’ll briefly describe a project we believe is a great potential solution for our hypothetical small company use case. Mendable is a venture-backed startup providing an easy-to-use RAG chatbot service for clients.

A sidebar navigation allows users to create a new chatbot, select documents that comprise an associated knowledge base, and provide some basic configuration options (e.g., prompt and LLM used).

[Confirm options]

[Screenshots to illustrate key features/UI of Mendable; brief video better?]
[Intent of this section is to provide some understanding of what a RAG service might look like]

# Introducing Paisley
## Comparison with potential solutions
We’ve developed Paisley—an open-source RAG framework “starter kit”—to enable users to quickly deploy and methodically iterate with their own data, using an opinionated set of the most relevant configuration options and RAG components. Our goal was to strike a balance between the overwhelming complexity of the fragmented open-source landscape and the limited flexibility of non-enterprise paid solutions.

Given the complex, evolving open-source ecosystem, a user who wants to build and deploy their own RAG chatbot will need to assemble and integrate each of the various components by themselves. For a user who wants to maintain complete control of their proprietary data, this may be the best approach but will require time and knowledge.

Conversely, the use of hosted solutions will be considerably faster, but for our hypothetical small business, this requires a commitment to an untested and potentially untrustworthy vendor with limited control over configuration options and proprietary information.

[Need to include “open source” components?]
[Could create an open-source vs. RAG service (use Mendable?) vs. Paisley chart]

## Paisley components
The primary components in Paisley are:

- “knowledge bases” - a collection of documents with similar content properties that are all chunked and embedded in the same way
- a “chatbot” - a chat interface that interacts with an API endpoint. A chatbot ID is provided to leverage a “pipeline” to take a user’s query, retrieve the appropriate context from each associated knowledge base, and prompt an LLM to generate an ultimate response
- “evaluations” - a module that maintains a historical record of every interaction with a chatbot and facilitates the assessment of RAG performance. Each query a user makes, the corresponding chatbot ID, the retrieved context, and ultimate answer from the LLM are all stored to allow users to measure RAG performance over time

[Diagram required to illustrate?]

### Knowledge bases
As mentioned in section 2.2, how a document is processed and stored within a database has a significant impact on the overall effectiveness of the RAG system. Paisley has provided a significant number of options to allow users to rapidly iterate on the knowledge base configurations that are best suited to their content.

[This section to discuss provided options with knowledge bases]
[Need screenshots to illustrate knowledge base options]

As processing various file and content types is such a critical step, Paisley has provided a built-in option to leverage a 3rd party service to parse more challenging documents.

Paisley allows users to create as many knowledge bases as they would like, to group together files that should be chunked and embedded in the same way. The configuration options for each knowledge base are stored within a corresponding JSON configuration, which facilitates retrieval and evaluations.

### Chatbots and Pipelines
Paisley allows users to create multiple chatbots. Each chatbot can be associated with any number of created knowledge bases. As required, users can associate the same knowledge base with multiple chatbots to facilitate testing various RAG pipeline configurations.

Each chatbot is assigned a unique ID, and a JSON configuration is created (referred to as a RAG “pipeline”) that references associated knowledge bases and selected configuration options. This chatbot ID is submitted along with a user’s query and determines what knowledge bases and configuration options are used to create a response. As per section 2.2, these configuration options involve further post-processing once nodes are retrieved from a knowledge base.

[Need to pick a single word?: i.e., pipeline vs. chatbot? - pipeline used in backend, chatbot used in front-end]
[Need screenshots to illustrate chatbot options]

### Evaluations
Paisley stores all RAG chatbot interactions within a dedicated database to facilitate visibility and data analysis. Metrics for faithfulness and answer relevancy are automatically calculated via built-in integration with the Ragas Framework (https://docs.ragas.io/en/stable/).

A summary of the chatbot interaction history is displayed within the “History” tab. A graph of response metrics associated with a particular chatbot is displayed within the “Metrics” tab.

### Visual UI
A visual user interface (UI) is provided to enable users to most quickly interact with the key components and features of Paisley:

- The configuration and creation of knowledge bases and uploading of files
- The creation and configuration of chatbots
- Basic summary eval data

The UI is automatically available once the server is deployed by navigating to the assigned IP address with a web browser. If desired, Paisley can also be directly accessed via the same API endpoints leveraged by the UI.

### Infrastructure
When setting up Paisley for the first time (see section 4.3 below), we’ll automatically provision all of the basic infrastructure required and deploy the code for each of the components so you can get started with creating a chatbot right away. We’ve tried to keep the infrastructure simple:

- A public EC2 instance with an NGINX web server to host our UI and backend
- An AWS DocumentDB instance (a MongoDB-compatible database with vector search capabilities) to store knowledge bases
- An AWS RDS instance (a PostgreSQL-compatible database) for evaluations
- An additional S3 bucket to store uploaded (and already processed) files associated with the knowledge bases

[This diagram may be too complicated for here? Perhaps need a version without detailed text as intro]
[Need to include UI in architecture diagram?]

## Using Paisley
To use Paisley, our hypothetical organization must have an AWS account, set their access keys, download the AWS CLI, and have Node and NPM installed on their machine. Once those preliminary steps are finished, a user can deploy Paisley and get started with configuring knowledge bases and an initial chatbot within minutes.

[GIF of CDK install?]

Steps:

1. `npm install paisley`
2. `paisley init`
3. `paisley deploy [instanceName]`
4. Using a browser, navigate to the IP address displayed by the CLI
5. To facilitate tear down: `paisley destroy [instanceName]`

By defining `[instanceName]`, multiple concurrent instances of Paisley can be deployed (onto separate infrastructure), if desired.

# Designing Paisley
## Design guidelines
While implementing Paisley, our design choices reflected the guidelines below.

### As simple as possible (but no simpler)
Where possible, our goal was to add complexity only where required. As discussed below, this influenced the implementation of configuration options and architecture decisions.

### Make it easy to build on
We feel that part of the value in creating an open-source framework is that source code is exposed and thus, should be easy to build on. Our architecture was also designed to use the databases as key integration points between modules. The DocDB database integrates the knowledge base component with the pipeline component, and the RDS database is the primary integration point for the evaluations component with the rest of Paisley.

### Facilitate iterations
Due partly to the stochastic nature of LLMs, the importance of monitoring and evaluation is reinforced as a RAG best practice. Recommendations on adding complexity to any RAG setup are often prefaced with the admission that implementation will be specific to each use case. The importance of iterating led to our decision to include an evaluation module and provide a visual UI that supports the user in quickly establishing a comparison baseline when making configuration changes.

## Design tradeoffs
### Language selection
Although Python was not a language we were deeply familiar with, the decision was made to use Python since all of the significant machine learning (ML) and RAG developments are generally first made in Python. There are more Python libraries, they are generally more complete, and the community is larger and more active. Python provided the most flexibility for future development options.

### Library selection
Having chosen Python, another key question was whether or not we might choose a popular framework like LangChain, LlamaIndex, or Haystack to build upon. We also considered the functionality provided by visual, node-based, “drag-and-drop” interfaces on creating RAG pipelines. Although these were easy to use, we identified some drawbacks:

- Although creating pipeline iterations was easy, it was cumbersome to track and compare results from different pipelines.
- Given our priority for deploying a chatbot quickly and managing various knowledge bases, we felt the infinite flexibility offered by node-based frameworks was not necessary.
- These visual frameworks typically “wrap” LangChain with a proprietary syntax, which increased the level of abstraction of the code and made not using the visual framework difficult.

Ultimately, after some prototyping with various libraries and frameworks, we chose LlamaIndex for the following reasons:

- The abstractions LlamaIndex used—nodes, indexes, retrievers—better exposed the key elements allowing us to create and flexibly integrate multiple knowledge bases, each with unique settings as part of a RAG pipeline.
- The various connectors available in LlamaIndex provided flexibility for how our knowledge bases could be persisted within a database.
- The ability to quickly extend and prototype advanced retrieval features with LlamaIndex once a knowledge base had been established was a benefit for any future development.

### Configuration options to expose
The configuration options we chose to expose within our backend and through our visual UI were those consistently identified by developers with production experience to be components with a significant impact on retrieval performance, and thus overall response outcomes. These options include knowledge base chunking/embedding options, and context post-processing options of similarity filtering, ColBERT reranking, and context re-ordering.

### Database selection
We considered the use of specialized databases, vector databases such as Milvus, Qdrant, Chroma, and others, but ultimately, ended up selecting more common databases—the basic (non-serverless) AWS versions of MongoDB and PostgreSQL, DocumentDB, and RDS respectively.

Although specialized databases may have provided some performance benefit and simplified the combined implementation of keyword and vector retrieval, we didn’t feel that the potential performance benefits would outweigh the drawbacks:

- Vector databases implement keyword/vector retrieval differently, which would have created more commitment to a particular database.
- Featureset and offerings are rapidly changing—with the pace of change in this domain, we were unsure of the longevity of interfaces (many libraries contained deprecated methods) or featureset.
- The stable, established nature of MongoDB and PostgreSQL was well aligned with our desire to keep things simple and provide maximum flexibility for further development. Use of the AWS versions was the default given our decision to deploy to AWS.
- The use of MongoDB as our vector and keyword database for our knowledge bases also resulted in independent implementations of keyword and vector retrieval (i.e., these weren’t handled via the syntax of a single vector database) and thus provided us with more visibility of retrieved context for post-processing and evaluations.

### Architecture selection
At the outset, it seemed sensible to implement a serverless function (AWS Lambda) to manage the processing of documents added to a knowledge base. The serverless nature of the Lambda would provide efficient scalability for a process we assumed to be fairly bursty. Once documents are uploaded and processed, this processing function would no longer be required.

With some experimentation and considering the 15 min max processing limitation of AWS Lambdas, we ultimately decided against using Lambdas for the knowledge base:

- With the decision to provide an option to use a 3rd party document ingestion service, the possibility existed that total processing time could exceed 15 mins. This possibility was demonstrated with larger single files and would be likely with multiple files (tens of documents).
- Although multiple concurrent Lambdas could be used to process only individual files, ultimately, managing this long-running 3rd party process on the existing EC2 server was more aligned with our design philosophy.

[Some load testing numbers on file uploading here would be super helpful: validate the next sentence!]
Although serverless functions could also have been used to implement the other document processing options, the EC2 was able to handle tens of documents in our testing.

# Future work
We have a long list of further developments, but the ones we’re most excited about are:

- Using open-source models (like Gemini and Llama3), rather than closed-source models (like OpenAI and Anthropic). As the performance of open-source and especially smaller, quantized models improves, hosting models and serving inference becomes less complex and costly. Use of open-source models would allow users to ensure proprietary information is better protected.
- Additional evaluations features. RAG and LLM evaluations is a topic with considerable depth and developing best practices. The use of “golden datasets” (predefined questions and answers on which to assess the suitability of responses) is a powerful evaluation tool that improves the long-term monitoring of RAG pipelines.
