import { Viewer } from "@toast-ui/react-editor";
import {
  Number,
  Title,
  Wrapper,
  ArticleContent,
  ArticleTopWrapper,
  ArticleContentWrapper,
  GlobalViewerStyle,
} from "./Article.styles";
import badWords from "./badWords.json";

function Article({ Numberprop, Titleprop, childrenprop, subSections, depth = 0 }) {
  // console.log(subSections);
  let markdown = childrenprop;

  // 욕설 필터링
  const badWord = badWords;

  const censorText = (text, badWords) => {
    let censored = text;

    const SEP = "[!@#$%^&*()\\-_=+\\[\\]{};:'\",.<>?/\\\\s0-9ㄱ-ㅎㅏ-ㅣ\\s]*";

    const wordPatterns = badWords
      .filter((w) => w && w.trim())
      .map((word) => {
        const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        return escaped
          .split("")
          .map((ch) => `${ch}${SEP}`)
          .join("");
      });

    const alternation = wordPatterns.join("|");
    const fullPattern = `(?<![ㄱ-ㅎ가-힣a-zA-Z0-9])(?:(?:${alternation}))+?(?![ㄱ-ㅎ가-힣a-zA-Z0-9])`;
    const regex = new RegExp(fullPattern, "gi");
    censored = censored.replace(regex, "***");

    return censored;
  };

  const censorHtmlText = (html, badWords) => {
    return html.replace(/>([^<]+)</g, (match, text) => {
      const censoredText = censorText(text, badWords);
      return `>${censoredText}<`;
    });
  };

  markdown = censorHtmlText(markdown, badWord.words);

  return (
    <>
      <GlobalViewerStyle />
      <Wrapper depth={depth}>
        <ArticleTopWrapper>
          <Number>{Numberprop}.</Number>
          <Title>{Titleprop}</Title>
        </ArticleTopWrapper>

        <ArticleContentWrapper>
          <ArticleContent>
            <Viewer initialValue={markdown} Viewer={true} />
          </ArticleContent>
        </ArticleContentWrapper>

        {subSections && (
          <>
            {subSections.map((sub) => (
              <Article
                key={sub.id}
                Numberprop={sub.headerNumber}
                Titleprop={sub.title}
                childrenprop={sub.contents}
                subSections={sub.children}
                depth={depth + 1}
              />
            ))}
          </>
        )}
      </Wrapper>
    </>
  );
}

export default Article;
