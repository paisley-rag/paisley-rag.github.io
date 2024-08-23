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
### 1.1  What is Paisley?
Paisley is an open-source Retrieval-Augmented Generation (RAG) framework to help IT or engineering teams quickly setup and deploy RAG chatbots with out-of-the-box best practices and tooling.

RAG is an approach for enhancing the capabilities of Large Language Models (LLMs) with an external “knowledge base” of (often proprietary) information. "With a RAG system, users make natural language queries to retrieve information from an external knowledge base. Then, this retrieved information is included in a prompt to an LLM such as OpenAI's GPT-4o or Claude 3.5 Sonnet offered by Anthropic."

Although a basic prototype RAG chatbot can be quickly created from numerous online tutorials and open-source libraries, deploying a production-ready chatbot involves a number of additional steps which require knowledge, libraries, and infrastructure to realize.

Paisley was created as an open-source, configurable, “bring-your-own-cloud” alternative to the proliferation of closed-source, paid, and typically 3rd party hosted RAG chatbot services. Our RAG “starter-kit” enables teams with limited resources and time to skip some of the research, easily establish knowledge bases, and more quickly deploy internal RAG chatbots.

<div name="small spacer" style={{margin: '80px 0px'}}></div>

###  1.2 Use Case
Let’s consider a hypothetical small organization - an animal conservancy - which maintains information on wild animals in its purview, in addition to HR info, and with a 20 person team. Although there may be extensive documentation available for the various animals or departments, specialists are busy and can’t always field questions. This is a common scenario where the 24-7 availability of a RAG chatbot can help staff members more effectively find information, without relying on direct communication.

Although small, this organization is large enough to have a distribution of duties: a busy technical expert who may help to set up the chatbot infrastructure, an information owner, and the ultimate consumers of that information - the other staff of the organization.

<div name="big spacer" style={{margin: '100px 0px'}}></div>

## 2.  What is RAG?
Before delving into the existing solutions for setting up a RAG chatbot, it may be helpful to better understand what RAG is and the various considerations that may impact any decision. For readers who are familiar with RAG, feel free to skip this section and refer back only for clarification on terms used. 

### 2.1  LLMs
LLMs are rapidly improving in capability and have a myriad of uses, but they have inherent limitations. It’s common for an LLM to provide authoritative yet inaccurate responses or “hallucinate”. LLMs are typically trained on a snapshot of the internet and thus unable to generate accurate responses to queries about current events or real-time data. Similarly, LLMs have no access to proprietary information not included in their training data.

Considering the hypothetical animal conservancy above, an LLM alone would not be able to answer questions regarding internal activities like the organization's HR policies or most important donors.

Although techniques such as fine-tuning and Low-Rank Adaption (LoRa) enable LLMs to adapt to new data, effective implementation requires a high level of technical skill, time, and cost. We do not consider changes to the LLM and view them as “frozen” within our project.

<div name="mini spacer" style={{margin: '50px 0px'}}></div>

#### 2.1.1  What is a prompt?
When using a chat interface, a user’s question (the “query”) is only part of what is submitted to the LLM. The query is combined with additional text (the “context”), and instructions (the “prompt”) to guide the LLM in generating a response. The ability for an LLM to remember parts of the conversation or prior responses comes from the history of the conversation being aggregated and re-submitted as context with each subsequent user input.

<img src='/img/2-1-1-prompt1.png' alt='example of prompt' />
<img src='/img/2-1-1-prompt2.png' alt='example of prompt' style={{display: 'block', margin: 'auto'}} />

<div name="small spacer" style={{margin: '80px 0px'}}></div>

### 2.2 RAG (knowledge base + LLM)
Most simply, RAG involves retrieving additional information and leveraging the prompt context window to submit this information to the LLM for use in generating a response. 

<img src='/img/2-2-0-retrieval1.png' alt='retrieval1' />

This additional information will come from one or more knowledge bases that serve as a “source of truth” for the LLM. Information contained within company documents, like PDFs, will be broken down into smaller “chunks” of text. When a user submits a query, relevant chunks are retrieved from the knowledge bases. This retrieved data and any instructions in the prompt will ground the LLM’s response to a user’s query with the relevant context. 

<img src='/img/2-2-0-retrieval2.png' alt='retrieval2' />

<div name="mini spacer" style={{margin: '50px 0px'}}></div>

#### 2.2.1 How does a knowledge base work?
What we think of as a “knowledge base” encompasses the documents our company wants the LLM to reference and a database for storing representations of that document. The process of collecting, importing, and processing information from those documents we call “ingestion”. 

<img src='/img/2-2-1-kb1.png' alt='knowledge base' />

The first step of ingestion is breaking down the raw data into smaller pieces (“chunking”). How a document is chunked affects the overall performance of retrieval: large chunks may obscure detail, small chunks may lack semantic meaning. Documents with different content types (e.g., tables vs long-form text) may require entirely different chunking and embedding strategies to be effective.

<img src='/img/2-2-1-kb-embed1.png' alt='embedding1' />

The next step in creating a knowledge base is to convert chunked data into numerical vectors, known as “embeddings”, using an embedding model. An embedding model converts each chunk of data into an embedding, a multi-dimensional array of hundreds or thousands of floating point values. An embedding captures the semantic meaning of each chunk, allowing for more nuanced and efficient comparisons than using raw data. 

<img src='/img/2-2-1-kb-embed2.png' alt='embedding2' />

The number of dimensions and possible values for each dimension produced by an embedding model define the embedding space. Similar chunks of data are represented by similar vectors that are near each other in the embedding space.

<img src='/img/2-2-1-kb-embed3.png' alt='embedding3' />

Each chunk’s embedding is then stored in a vector database along with the corresponding text of that chunk. The process of chunking, embedding, and storing the initial data is sometimes referred to as “indexing”.

When a user submits a query, it is embedded using the same model that was used to create a knowledge base. The query embedding is then compared against existing chunk embeddings in the vector database to find text chunks that are most similar. The retrieved text chunks are then combined with the user’s query to form a prompt that is sent to an LLM to generate a response.

<img src='/img/2-2-1-kb-query.png' alt='querying' />

<div name="small spacer" style={{margin: '80px 0px'}}></div>

### 2.3 Improving RAG
Above, we’ve outlined a simple RAG process involving indexing and retrieval prior to LLM generation. The complexity in RAG arises from the vast number of options available for even just those two initial steps, all of which can greatly impact the quality of retrieved context.

For our project and our hypothetical use case, we’ve chosen to focus on a few specific improvements to RAG. At the time of writing, these are widely accepted best practices for which all users should see improved RAG performance.

One improvement is the use of “hybrid search”, in which each ingested document is indexed into 2 different sets of embeddings. Broadly, there are “dense” and “sparse” embeddings, which correlate to “semantic search” and “keyword search”, respectively. Semantic search will be better for recovering text with similar meanings. For example, a query with the word “tiger” may also return chunks discussing “panther” or “cat”. In contrast, a query looking for “panthera tigris” is better served via “keyword” search - documents reflecting a higher frequency of those exact words.


As we’ve mentioned, based on the content within different documents, different chunking strategies may need to be applied. Each type of document may also require 2 different embedding strategies. Thus, managing multiple knowledge bases and managing additional retrieved context is necessary.

To manage the volume of retrieved context, some filtering and processing of the context prior to submission to the LLM also improves RAG performance.  Once context is retrieved, rejecting the context that may be least relevant helps to reduce computational resources and/or LLM token costs. In practice, this may involve taking, say, the top 5 results. A more computationally intensive but more effective method involves comparing the user’s original query against each of the returned text chunks to leave only the most relevant. We’ve chosen a re-ranking implementation known as “ColBERT re-ranking”. Finally, the order of each text chunk to be submitted to the LLM affects the quality of the final response. The most relevant context should be placed primarily at the very end of the submitted context, or the beginning; context placed in the middle can be easily overlooked by LLMs.

<img src='/img/2-3-0-chatbot.png' alt='chatbot' />

To further complicate matters, different LLMs may have limitations on the amount of context they can process and perform differently depending on the prompt instructions provided with the context and query.

All of the options discussed here improve RAG performance. However, the optimal configuration and combination of settings is heavily dependent upon the nature of the information, the format in which it is stored, and the specific queries users submit.

<div name="mini spacer" style={{margin: '50px 0px'}}></div>

#### 2.3.1 Evaluating a RAG system

Based upon even the relatively limited set of options discussed in Section 2.3 there are an almost endless number of possible combinations to consider. How should our hypothetical users choose which options to use? This is where having a structured way to evaluate RAG performance becomes important. Without a structured evaluations framework, the best a user can hope for is “gut feel” on which to base their RAG configuration decisions.

Both the quality of the retrieved context (text chunks) and the final answer generated by the LLM are key areas for evaluation. There are 3 common metrics used to assess context retrieval and answer quality:
<ul>
  <li>Context relevance: Are the most relevant chunks retrieved for a user’s query?</li>
  <li>Faithfulness: How accurately does the generated response utilize the retrieved context?</li>
  <li>Answer relevance: How well does the generated response address the user’s query?</li>
</ul>


Typically, scores are assigned to each metric for every query, the retrieved context, and generated LLM response. Scoring can be done by human evaluators (potentially time-consuming and expensive) or it can be automated through the use of an LLM. Low scores across a variety of different queries indicate opportunities to improve RAG configuration options.


<div name="big spacer" style={{margin: '100px 0px'}}></div>

## 3. Existing solutions


### 3.1 Open-source libraries

<div name="small spacer" style={{margin: '80px 0px'}}></div>

### 3.2 Hosted solutions

<div name="mini spacer" style={{margin: '50px 0px'}}></div>

#### 3.2.1 Mendable

<div name="big spacer" style={{margin: '100px 0px'}}></div>

## 4. Introducing Paisley
### 4.1 Comparison with potential solutions

<div name="small spacer" style={{margin: '80px 0px'}}></div>

### 4.2 Paisley components

<div name="mini spacer" style={{margin: '50px 0px'}}></div>

#### 4.2.1 Knowledge bases
<div name="small spacer" style={{margin: '80px 0px'}}></div>

#### 4.2.2 Chatbots
<div name="small spacer" style={{margin: '80px 0px'}}></div>

#### 4.2.3 Evaluations
<div name="small spacer" style={{margin: '80px 0px'}}></div>


## 4.3 Deploying Paisley

<div name="big spacer" style={{margin: '100px 0px'}}></div>

## 5. Designing Paisley

### 5.1 Design guidelines

<div name="small spacer" style={{margin: '80px 0px'}}></div>

### 5.2 Design decisions

<div name="mini spacer" style={{margin: '50px 0px'}}></div>

#### 5.2.1 Library selection
<div name="small spacer" style={{margin: '80px 0px'}}></div>

#### 5.2.2 Configuration options
<div name="small spacer" style={{margin: '80px 0px'}}></div>

#### 5.2.3 Database selection

<div name="big spacer" style={{margin: '100px 0px'}}></div>

## 6. Challenges

### 6.1 Modular plug-in architecture for evaluations

<div name="big spacer" style={{margin: '100px 0px'}}></div>

### 6.2 Background processing

<div name="big spacer" style={{margin: '100px 0px'}}></div>

## 7. Future work


<div name="big spacer" style={{margin: '100px 0px'}}></div>
