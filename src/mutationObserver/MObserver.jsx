import React, { useEffect, useState, useRef } from "react";

function useMutationObserver(
  ref,
  callback,
  options = {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
  }
) {
  useEffect(() => {
    if (ref.current) {
      const observer = new MutationObserver(callback);
      observer.observe(ref.current, options);
      return () => observer.disconnect();
    }
  }, [callback, options]);
}

export default function MObserver() {
  const mutationRef = useRef();
  const [mutationCount, setMutationCount] = useState(0);
  const [content, setContent] = useState("Hello world");

  function incrementMutationCount(mutationRecords) {
    console.log("mutationRecords --> ", mutationRecords);
    setMutationCount(mutationCount + 1);
  }
  useMutationObserver(mutationRef, incrementMutationCount);

  return (
    <div id="mut-obs" className="mut-obs">
      <h1>47z - Mutation Observer</h1>
      <label htmlFor="content-input">Edit this to update the text:</label>
      <textarea
        id="content-input"
        style={{ width: "100%" }}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div style={{ width: "100%" }} ref={mutationRef}>
        <div
          style={{
            resize: "both",
            overflow: "auto",
            maxWidth: "100%",
            border: "1px solid black",
          }}
        >
          <h2>Resize or change the content:</h2>
          <p>{content}</p>
        </div>
      </div>
      <div>
        <h3>Mutation count {mutationCount}</h3>
      </div>
    </div>
  );
}
