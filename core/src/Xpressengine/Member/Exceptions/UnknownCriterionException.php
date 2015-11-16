<?php
/**
 * This file is unknown criterion exception.
 *
 * PHP version 5
 *
 * @category    Member
 * @package     Xpressengine\Member
 * @author      XE Team (developers) <developers@xpressengine.com>
 * @copyright   2015 Copyright (C) NAVER <http://www.navercorp.com>
 * @license     http://www.gnu.org/licenses/lgpl-3.0-standalone.html LGPL
 * @link        http://www.xpressengine.com
 */
namespace Xpressengine\Member\Exceptions;

use Xpressengine\Member\Exception;

/**
 * 비교대상 등급 문자가 정의 되지 않은 문자인 경우 발생하는 Exception
 *
 * @category    Member
 * @package     Xpressengine\Member
 * @author      XE Team (developers) <developers@xpressengine.com>
 * @copyright   2015 Copyright (C) NAVER <http://www.navercorp.com>
 * @license     http://www.gnu.org/licenses/lgpl-3.0-standalone.html LGPL
 * @link        http://www.xpressengine.com
 */
class UnknownCriterionException extends Exception
{
    /**
     * constructor
     *
     * @param array     $args     arguments
     * @param int       $code     error code
     * @param Exception $previous previous exception
     */
    public function __construct($args = [], $code = 0, Exception $previous = null)
    {
        parent::__construct($args, $code, $previous);
        if (isset($args['criterion'])) {
            $this->message = sprintf('Unknown criterion [%s]', $args['criterion']);
        }
    }
}