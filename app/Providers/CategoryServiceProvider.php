<?php
/**
 * CategoryServiceProvider.php
 *
 * PHP version 7
 *
 * @category    Providers
 * @package     App\Providers
 * @author      XE Developers <developers@xpressengine.com>
 * @copyright   2015 Copyright (C) NAVER Corp. <http://www.navercorp.com>
 * @license     http://www.gnu.org/licenses/old-licenses/lgpl-2.1.html LGPL-2.1
 * @link        https://xpressengine.io
 */

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Xpressengine\Category\CategoryHandler;
use Xpressengine\Category\EventListener;
use Xpressengine\Category\Models\Category;
use Xpressengine\Category\Models\CategoryItem;
use Xpressengine\Category\Repositories\CategoryItemRepository;
use Xpressengine\Category\Repositories\CategoryRepository;

/**
 * Class CategoryServiceProvider
 *
 * @category    Providers
 * @package     App\Providers
 * @author      XE Developers <developers@xpressengine.com>
 * @copyright   2015 Copyright (C) NAVER Corp. <http://www.navercorp.com>
 * @license     http://www.gnu.org/licenses/old-licenses/lgpl-2.1.html LGPL-2.1
 * @link        https://xpressengine.io
 */
class CategoryServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application events.
     *
     * @return void
     */
    public function boot()
    {
        CategoryItemRepository::setCategoryModelProvider(function () {
            return CategoryRepository::getModel();
        });
        CategoryRepository::setModel(Category::class);
        CategoryItemRepository::setModel(CategoryItem::class);

        $this->app['events']->subscribe(EventListener::class);
    }

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(CategoryHandler::class, function ($app) {
            $proxyClass = $app['xe.interception']->proxy(CategoryHandler::class, 'XeCategory');

            return new $proxyClass(
                new CategoryRepository,
                new CategoryItemRepository($app['events'])
            );
        }, true);
        $this->app->alias(CategoryHandler::class, 'xe.category');
    }
}
