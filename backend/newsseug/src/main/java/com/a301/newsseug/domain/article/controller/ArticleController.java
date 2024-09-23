package com.a301.newsseug.domain.article.controller;

import com.a301.newsseug.domain.article.model.dto.response.TodayArticlesResponse;
import com.a301.newsseug.domain.article.model.dto.response.ListArticleResponse;
import com.a301.newsseug.domain.article.service.ArticleService;
import com.a301.newsseug.global.model.dto.Result;
import com.a301.newsseug.global.util.ResponseUtil;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Tag(name = "기사 API")
@RestController
@RequestMapping("/api/v1/articles")
@RequiredArgsConstructor
public class ArticleController {

    private final ArticleService articleService;

    @Operation(summary = "홈 화면 기사 조회 API", description = "[\"오늘의 뉴스\", \"20대 관심 기사\", \"전체 기사\"] 를 조회한다.")
    @GetMapping("/home")
    public ResponseEntity<Result<TodayArticlesResponse>> getHomeArticles() {

        TodayArticlesResponse result = articleService.getHomeArticles();

        return ResponseUtil.ok(Result.of(result));

    }

    @Operation(summary = "단일 기사 조회 API", description = "단일 기사를 조회한다.")
    @GetMapping("/{articleId}")
    public ResponseEntity<Result<Boolean>> getArticle(@PathVariable(name = "articleId") Long articleId) {

        return ResponseUtil.ok(Result.of(Boolean.TRUE));

    }

    @Operation(summary = "카테고리별 기사 조회 API", description = "카테고리별 기사 리스트를 조회한다.")
    @GetMapping()
    public ResponseEntity<Result<ListArticleResponse>> getArticlesByCategory(@RequestParam String categoryName) {

        ListArticleResponse result = articleService.getArticlesByCategory(categoryName);
        return ResponseUtil.ok(Result.of(result));

    }

}
