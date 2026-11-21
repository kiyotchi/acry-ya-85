@if ($paginator->hasPages())
    <div class="listNavigation__pagenation c-pagenation">
        @if ($paginator->onFirstPage())
        @else
            <a href="{{ $paginator->previousPageUrl() }}"
               class="pagenation__prev {{ ($paginator->currentPage() == 1) ? ' disabled' : '' }}"><i
                        class="c-icon--arrow-l-black"></i></a>
        @endif

        <ol>
        @foreach ($elements as $element)
            <!-- "Three Dots" Separator -->
                @if (is_string($element))
                    <li class="disabled"><span>{{ $element }}</span></li>
                @endif

            <!-- Array Of Links -->
                @if (is_array($element))
                    @foreach ($element as $page => $url)
                        <li>
                            @if ($page == $paginator->currentPage())
                                <p class="is-active">{{ $page }}</p>
                            @else
                                <a href="{{ $url }}">{{ $page }}</a>
                            @endif
                        </li>
                    @endforeach
                @endif
            @endforeach
        </ol>

        @if ($paginator->hasMorePages())
            <a href="{{ $paginator->nextPageUrl() }}" class="pagenation__next"><i class="c-icon--arrow-r-black"></i></a>
        @else
        @endif
    </div>
@endif
